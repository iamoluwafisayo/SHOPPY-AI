from flask import Flask, request, jsonify
from flask_cors import CORS

query_embeddings = __import__('embed').query_embeddings
get_response = __import__('ai').get_response

app = Flask(__name__)
app.url_map.strict_slashes = False
CORS(app, resources={r"*": {"origins": "*"}})

def get_prompt(products, criteria):
    return f"Which of the following products is the best {criteria}?\n\n" + "\n".join(str(products))

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
    response = get_response(chat)
    if response is None:
        return jsonify({"message": "Sorry, I encountered an error while searching, don't worry it's probably my fualt. Tray again later"})
    
    chat.append({"role": "assistant", "content": response})

    return jsonify({"message": response})



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)
