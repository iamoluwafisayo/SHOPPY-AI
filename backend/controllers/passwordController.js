import dbClient from "../utils/db";
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import sha1 from 'sha1'

dotenv.config()

const adminEmail = process.env.EMAIL_ADMIN
const mailService = process.env.MAIL_SERVICE
const pass = process.env.PASSWORD

function generateEmailMessage(otp, email, expiration_time = 2) {
    const message = `
    Hello,

    Here is your OTP code: ${otp} to reset your shopyai password for your ${email} account. 
    Please note that this code will expire in ${expiration_time} minutes.
    If you have not requested to reset your password, you can ignore this e-mail.
    Thank you for your understanding,
    
    Your ShopyAi team,`

    return message
}
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

function generateExpirationTime(minutes = 2) {
    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes() + minutes);
    return expiration;
}


export default class PasswordController {
    static async recovery(req, res){
        const userEmail = req.body.email
        if (userEmail === null || !userEmail) {
          res.status(400).json({ error: "email is required" });
        }

        try{
            const user = await dbClient.getUser({ email: userEmail })
            if(user){
                const otp = generateOTP()
                const otpExpire = generateExpirationTime()
                await dbClient.newOtp({email: userEmail, otp: otp, expire: otpExpire})
            
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    auth: {
                        user: adminEmail,
                        pass: pass.toString()
                    }
                });
             

                const mailOption = {
                    from: adminEmail,
                    to: userEmail,
                    subject: "Password reset",
                    text: generateEmailMessage(otp, userEmail).toString()
                    
                }

                transporter.sendMail(mailOption, (err, info) => {
                    if(err){
                       // if the is not valide email
                        return res.status(500).json({ error: "Failed to send email" });
                    } else {
                        res.status(200).json({message: "We have sent you an email with the OTP code"})
                    }
                } )

            }else{
                res.status(404).json({message: "User not found"})
            }
        }catch(err){
            console.log(err)
            res.status(500).send({error: "Server Error"})
        }

    }
    static async checkOtp(req, res){
        const otp = parseInt(req.body.otp)

        if (otp === null || !otp) {
            res.status(400).json({ error: "otp is required" });
        }

        try{
            const result = await dbClient.getOtp({otp: otp})
            if(result){
                const email = result.email
                const maxAge = 10  * 60 * 1000 // 10 minutes 
                res.cookie('email', email, { maxAge: maxAge, httpOnly: true })
                res.status(200).json({message: "OTP is valid"})
            }else{
                res.status(404).json({message: "OTP is not valid"})
            }
        }catch(err){
            console.log(err)
            res.status(500).json({error: "Server Error"})
        } 
    }
    static async resetPassword(req, res){
        const newPassword = req.body.newPassword
        const confirmPassword = req.body.confirmPassword
        console.log(req.cookies.email)
        if(newPassword !== confirmPassword){
            console.log(`newPassword: ${newPassword} confirmationPassword: ${confiramtionPassword}`)
            res.status(400).json({error: "Password do not match"})
        }else{
            try {
                const email = req.cookies.email
                const password = sha1(newPassword)
                await dbClient.update({ email: email }, { password: newPassword })
                res.status(200).json({ message: "Password has been updated" })
        
            } catch (err) {
                res.status(500).json({ error: "Server Error" })
            }
        }
    }
}