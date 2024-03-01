from flask import Flask, request, jsonify
from flask_caching import Cache

query_embeddings = __import__('embed.py').query_embeddings
get_response = __import__('ai.py').get_response

app = Flask(__name__)
app.url_map.strict_slashes = False

cache = Cache(app, config={'CACHE_TYPE': 'simple'})

def get_prompt(products, criteria):
    return f"Which of the following products is the best {criteria}?\n\n" + "\n".join(products)

@app.route('/')
def hello_world():
    return 'Hello, World!'


# use json to get message
@app.route('/ask', methods=['POST'])
def ask():
    message = request.json["message"]
    id = request.json["id"]

    messages = cache.get(id) or []

    products = query_embeddings(message)

    messages.append({"role": "user", "message": get_prompt(products, message)})

    response = get_response(messages)
    if response is None:
        return jsonify({"message": "An error occurred."})
    
    messages.append({"role": "assistant", "message": response})
    cache.set(id, messages)

    return jsonify({"message": response})



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
