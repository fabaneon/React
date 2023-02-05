#!/usr/local/bin/python3
print("Content-Type: text/html")
print()

html_text = """
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
        </head>
        <body>
            <div>
                ff
            </div>
        </body>
    </html>
"""


with open('crud.html','w') as crud:
    crud.write(html_text)
    crud.close()
doc = open('crud.html','r').read()

    
print(doc)
