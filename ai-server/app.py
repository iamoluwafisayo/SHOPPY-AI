from flask import Flask, request, jsonify
from flask_cors import CORS

query_embeddings = __import__('embed').query_embeddings
get_response = __import__('ai').get_response

app = Flask(__name__)
app.url_map.strict_slashes = False
CORS(app, resources={r"*": {"origins": "*"}})

def get_prompt(products, query):
    return f" You are an AI named Shoppy AI and your job is to help users find a product using natualy language. You have a list of products and you need to find the product that the user is looking for. \n\nYour task is to Search for products in the given list using natural language. \n\nList of products: {', '.join(str(products))}\n\nUser's natural language query: {query}\n\n If you don't see the product you are looking for, let the user know you can't find a suitable product in  your database and ask them to provide you with more details and show them the products you have saying but these are some products i found that might interest you. Also make sure you show the user images of the products you find by adding this in your response ![View Image](one url in the images_list exactly as it is in the list enclosed in \"\" from the 'https://m.' to the '.jpg') and a link to buy the product, do that using markdown in your response. \n"

@app.route('/')
def hello_world():
    return 'Hello, World!'


# use json to get message
@app.route('/ask', methods=['POST'])
def ask():
    chat = request.json["chat"]
    message = chat[-1]["content"]



    products = query_embeddings(message)

    chat.append({"role": "user", "content": get_prompt(products, message)})
    # token_count = sum(map(len, chat[-1]["content"].split()))
    # if token_count > 15000:
    #     chat = chat[-2:]
    response = get_response(chat)
    if response is None:
        return jsonify({"message": "Sorry, I encountered an error while searching, don't worry it's probably my fualt. Try again later"})
    
    chat.append({"role": "assistant", "content": response})

    print(response)
    return jsonify({"message": response})



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)
