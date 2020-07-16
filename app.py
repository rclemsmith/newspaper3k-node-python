import sys 
import newspaper
from newspaper import Article
from newspaper import fulltext
import json
# Takes first name and last name via command  
# line arguments and then display them 
# print("Output from Python") 
# print("Url: " + sys.argv[1]) 
article = Article(sys.argv[1])
article.download()
article.parse()
print(json.dumps({'text': article.text, 'image': article.top_image}, sort_keys=True, indent=4))