---
permalink: /widgets/
title: Widgets
layout: layouts/widgets.njk
code_heading: Code Widget
code:
  code: |-
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
color_heading: Color Picker Value
color: "#ff00ab"
date_heading: Date Picker Value
date_ex: Aug 2nd, 1991
datetime_heading: Date Time Picker Value
datetime: August 31, 2021 11:27 AM
file_heading: File Value
file: /images/uploads/test.html.txt
image_heading: Image Value
image: /images/uploads/2819.jpg
list_heading: List Values
list:
  - quote: Love For All, Hatred For None.
    author: Khalifatul Masih III
  - quote: "Change the world by being yourself. "
    author: Amy Poehler
  - quote: Whatever you do, do it well.
    author: Walt Disney
  - quote: Every moment is a fresh beginning.
    author: T.S Eliot
map_heading: Map Value
map: '{"type":"Point","coordinates":[103.8337827,1.2935731]}'
object_heading: Object Values
profile:
  birthdate: 06/29/1995
  public: true
  name: Justine Salangsang
  address:
    street: Simei
    post-code: "529861"
    city: Singapore
    postcode: "123456"
favorite_post: my-third-blog-post
airport_code: SG
date: 1991-08-01T16:00:00.000Z
airport-code: SG
datetime_ex: 2021-08-31T03:15:00.021Z
relation_heading: Relation Value
select_heading: Select Value
---
Widgets define the data type and interface for entry fields. Netlify CMS comes with several built-in widgets. Click the widget names in the sidebar to jump to specific widget details. We’re always adding new widgets, and you can also create your own!

Widgets are specified as collection fields in the Netlify CMS config.yml file. Note that YAML syntax allows lists and objects to be written in block or inline style, and the code samples below include a mix of both.

To see working examples of all of the built-in widgets, try making a 'Kitchen Sink' collection item on the CMS demo site. (No login required: click the login button and the CMS will open.) You can refer to the demo configuration code to see how each field was configured.

<https://www.netlifycms.org/docs/widgets/>