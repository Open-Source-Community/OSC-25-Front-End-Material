# HTML Tutorial

  Here we will learn the HTML Elements, Its types, and usage.

## Agenda

- [What is HTML?](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#what-is-html)
- [Why HTML?](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#why-html)
- [General in writing the code](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#general-in-writing-the-code)
- [General to all elements](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#general-to-all-elements)
- [Comments](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#comments)
- [DOCTYPE](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#doctype)
- [HTML Element](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#html-element)
  - [Head Element](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#head-element)
    - [Meta Elements](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#meta-elements)
    - [Title Element](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#title-element)
  - [Body Element](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#body-element)
    - [Heading Elements](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#heading-elements)
    - [Paragraph Element](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#paragraph-element)
    - [Anchors](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#anchors)
    - [Images](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#images)
    - [Lists](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#lists)
    - [Span Element](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#span-element)
    - [Break Element](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#break-element)
    - [Horizontal Rule](https://github.com/Open-Source-Community/OSC-25-Front-End-Material/tree/master/HTML#horizontal-rule)

----------------------------------------------------------------

- ## What is HTML?

  - A short for Hyper Text Markup Language.
  - It's the backbone for building any webpage and it has the main content of the webpages.
  - There are 2 versions of HTML (4, 5) **covered in this tutorial**

- ## Why HTML?
  
  If you are looking for working as a Front-end Developer, Back-end Developer or Mobile Developer or working with reports then HTML will be a great thing to start with.

- ## General in writing the code

  - We can write the code in more than one line for clarity.
  - any spaces between words you write will be translated in the webPage as a single space only.

- ## General to all elements
  
  - Our code in html is case insensitive.
  - Every element has opening and closing tags like  `<html>` (opening) `</html>` (closing).
  - But there are elements that is self closed like `<meta />` and `<b />`.
  - All elements can have attributes, some of them are specialized to a specific element and the other are general to all elements.  <br />
  Some general attributes like ( name, class, id ).

  - Attributes can be added to any element like this `<element attribute="value">`, and not always we need the value.

  - No difference between single and double quotes in writing the values of attribute, both are same in the webPage, and if the value is only one word you can discard quotes.

    ```html
    <meta charset=u tf-8 />

    <meta http-equiv='X-UA-Compatible' content='IE=edge' />

    <meta name="description" content="This is my toturial, learn html easily." />
    ```

    But if we have **SPACES** in the value of an attribute, then we must use quotes (single or double).

----------------------------------------------------------------

- ## Comments

   Comments are written like:
  
    ```html
    <!-- Comments --> 
    ```

    and this for both single and multi-line comments
    and we write them when we write code that isn't completely clear or new to this language, Comments helps you and your teammates to understand your code very well.

----------------------------------------------------------------

- ## DOCTYPE
  
   DocType is not an element but it's an instruction for
    the browser, for example

    ```html
    <!DOCTYPE html>
    ```

    is referred for HTML5 standard mode and this line is important (Must be written) and without it browser will run the page in [quirks mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

----------------------------------------------------------------

- ## HTML Element

    The `<html>` tag is the root of any webPage.

    It's written like:

    ```html
    <html>
      Some Content  
    </html> 
    ```

    it has 2 elements **ONLY** (Head and Body).

----------------------------------------------------------------

- ## Head Element

    The `<head>` element has all meta data about the page (Like Styling, Scripts, and any addition data).

    It's written like:

    ```html
    <head>
      Some Content
    </head> 
    ```

    And now we will learn the elements written inside the Head Element.

  ----------------------------------------------------------------

  - ### Meta Elements

      The `<meta>` tag is self closed tag that has the additional data about the webPage and insturctoins, it has some attributes (has some additional characteristics about that element) like charset or content.

      ```html
      <meta charset=u tf-8 />
      ```

      Here charset attribute holds the type of language you want to use (utf-8 holds English and Arabic).

      ```html
      <meta name="description" content="This is my toturial, learn html easily." />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      ```

      The name attribute can be description like this which holds the description that appears in searching and under the title of the page.

  ----------------------------------------------------------------

  - ### Title Element

      the Title element holds the title of the page that appears above in the tabs bar.

      It's written like:

      ```html
      <title>
        Some title
      </title>
      ```

----------------------------------------------------------------

- ## Body Element
  
  The Body element has all contents of the webPage

  like `<p>`, `<dev>` or anything

  ----------------------------------------------------------------

  - ### Heading Elements

      Headings are ordered from h1 (Biggest) to h6 (Smallest), h1 is the first level of headings and is the biggest title and when we want to add subtitles to it we use h2 which is level 2 and so on.

      It's written like:

      ```html
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>
      ```

      The output is:

      ![Headings](../imgs/Headings.png)

  ----------------------------------------------------------------

  - ### Paragraph Element
  
      the `<p>` element is a Block Element that means it have special spaces above, below, right and left, like an unseen box which makes the content clear for the user to read in the webPage.

      Is written like:

      ```html
      <p>
        Some Content
      </p>
      ```

      Examples:

      ```html
      <p class="one"> this is my paragraph </p>
      <p class='two' hidden> this is my second paragraph </p>
      ```

      The output is:

      ![Headings](../imgs/Paragraph.png)

      Note: The second paragraph is not visible because it has an attribute called hidden.

  ----------------------------------------------------------------

  - ### Anchors

      the `<a>` element can hold an anchor or link to another page, it's inline element
      Format:

      ```html
      <a href="link to be added">link text</a>
      ```

      Example:

      ```html
      <a id="Anchor-first-example" href="https://www.amazon.eg/" target="_blank" title="a link to amazon website">amazon</a>
      ```

      the attribute target describes were to open this link.

      the attribute title is a global attribute that appears when hover that element.

      In href attribute you can put a local link in your pc.

      ```html
      <a id="Anchor-second-example" href="test.html" target="_blank" title="a link to test.html">Test</a>
      ```

      If you put an email address the link well open any mail application to contact this email address.

      ```html
      <a id="Anchor-third-example" href="mailto:someEmail@gmail.com" title="Contact Me">Contact</a>
      ```

  ----------------------------------------------------------------

  - ### Images

    the `<img>` element is for adding images to the page, it's inline element.

    Format:

    ```html
    <img src="the location of image (external link, local path) " alt="the text to be shown in error condition" />
    ```

    - external link:

      ```html
      <img id="Image-first-example" src="https://html.com/wp-content/uploads/flamingo.jpg" alt="flamingo image" width="200px" height="150px" />
      ```

      you can use two attributes (Width and Height) but I don't recommend that, the better is to customize them in CSS.

    - local path:

      ```html
      <img id="Image-second-example" src="./images/Ain_Shams_logo.png" alt="Ain_Shams_logo1" />
      ```

      We just added the folder name that is besides the html file on the left then the name of the image after it including the extension (.png).

    - what if my image is outside the folder holding the html file?

      ```html
      <img id="Image-third-example" src="../images/Ain_Shams_logo.png" alt="Ain_Shams_logo2" />
      ```

      But not a good choice to make it like that.

  ----------------------------------------------------------------

  - ### Lists 
    it's a block elements

    1- UnOrdered List : Created by element `<ul>` and inside it some list items `<li>`.

    ```html
    <ul id="List-first-example">
      <li>things</li>
      <li>without</li>
      <li>order
        <ul>
          <li>also</li>
          <li>can be</li>
          <li>nested</li>
        </ul>
      </li>
    </ul>
    ```

    Output:

    ![unorderedListPicture](../imgs/UnorderedList.png)

    2- Ordered List : Created by element `<ol>` and inside it some list items `<li>`.

    ```html
    <ol id="List-second-example" type="a">
      <li value="4">things</li>
      <li>with</li>
      <li>order
        <ol reversed start="8">
          <li>also</li>
          <li>can be</li>
          <li>nested</li>
        </ol>
      </li>
    </ol>
    ```

    Output:

    ![orderedListPicture](../imgs/OrderedList.png)

    - attribute reversed : reverses the order of the list items.

    - attribute start : starts the list numbers from specific number.

    - attribute value : you can put a value in first `<li>` element to start from specific value by it's index.

    - attribute type : specifies the type of the list numbering.

      types : ( 1 [Numeric], A [Alphabetical Capital Letters], a [Alphabetical Small Letters], I [Romanichal Capital Letters], i [Romanichal Small Letters]).

    - lists can be nested.

    3- Description List : Created by element `<dl>` and used for writing a list with description for every item.

    ```html
    <dl id="List-third-example">
      <dt> SomeItem </dt>
      <dd> Description of that item </dd>
      <dd> Can have multiple lines</dd>
      <dt> Some Other Item </dt>
      <dd> Description for that other item </dd>
    </dl>
    ```

    Output:

    ![descriptionListPicture](../imgs/DescriptionList.png)

      inside it:

      1- `<dt>` (Data Title) : for identifying the item.

      2- `<dd>` (Data Details) : for identifying the details for that item.
  
  ----------------------------------------------------------------

  - ### Span Element

    It's inline element.

    Is used when you want to style a word or a part of a div or any content.

    Format:

    ```html
    content <span> middle content </span> other content
    ```

    Example:

    ```html
    <p>Lorem ipsum dolor sit amet, <span style="color: rgb(255, 255, 255);font-size: 20px; background-color: rgb(0, 158, 26);">consectetur</span> adipisicing elit.</p>
    ```

    Output:

    ![SpanPicture](../imgs/Span.png)

  ----------------------------------------------------------------

  - ### Break Element

    It's a Self closing tag (Empty tag).

    Is used to make a new line in the paragraph or any content.

    Format:

    ```html
    content <br /> other content
    ```

    Or

    ```html
    content <br> other content 
    ```

    Example:

    ```html
    <p> Lorem ipsum,<br /> dolor sit amet consectetur adipisicing elit.</p>
    ```

  ----------------------------------------------------------------

  - ### Horizontal Rule

    It's a block element and it's a self closing tag (Empty tag).

    Is used to make a horizontal line between elements
    Format: `<hr>` or `<hr />`.

  ----------------------------------------------------------------

