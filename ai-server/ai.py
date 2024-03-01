from openai import OpenAI
from os import getenv

client = OpenAI(api_key=getenv("OPENAI_API_KEY"))

def get_response(messages):
    try:
        return client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages
        )["choices"][0]["message"]["content"]
    except Exception as e:
        print(e)