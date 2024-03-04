from openai import OpenAI
from os import getenv

client = OpenAI(api_key=getenv("OPENAI_API_KEY"))

def get_response(messages):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages
        )
        return response.choices[0].message.content
    except Exception as e:
        print(e)