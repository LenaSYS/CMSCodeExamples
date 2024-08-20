// Text editor not loaded
setTimeout(() => {
    // After 100ms we assume text editor was loaded
}, 100);

// Click Buttons or other Elements

document.getElementsByClassName('button-save')[0].click();
document.querySelector('a.logo').click();
document.getElementsByName("_savedok")[0].click();
document.getElementsByClassName("btn btn-default btn-sm t3js-editform-new")[0].click();

// CK Editor (bla Typo ) Testad 2023
for (var x in CKEDITOR.instances) { textcontent = x };
CKEDITOR.instances[textcontent].insertHtml(content);         

// Redactor (bla Bolt) Testad 2023
document.querySelector('.redactor-styles > p').textContent = sentence;

// CodeMirror (bla Grav) Testad 2023
// https://stackoverflow.com/questions/8378678/how-can-i-set-the-value-of-a-codemirror-editor-using-javascript
document.querySelector('.CodeMirror').CodeMirror.setValue('Greger');

// Silverstripe (många steg med textboxar) Testad 2022
// var bodyArea = document.getElementById("Form_EditForm_Content");
bodyArea.value = str;

// TinyMCE Testad 2022 (bla Joomla)
tinymce.activeEditor.execCommand('mceInsertRawHTML', false, str);

// TinyMCE Testad 2023 (bla Joomla) including Line Break
// Generate Raw HTML
text += "<ul>";
for (var i = 0; i < loopsize; i++) {
text += "<li>"+bulletList + "</li>";
}
text += "</ul>";

tinyMCE.execCommand('mceInsertContent', false,'<span >' + text + '<span>');
tinyMCE.execCommand('InsertLineBreak',false);

// Direct texteditor access (Joomla) Tested 2023
document.getElementById("edit-body-0-value").value = text;

// Mediawiki Testad 2022
var textArea = document.getElementById('wpTextbox1');
textArea.value = str;

// Bolt Testad 2022 (Data inlagd med Jquery)
$(".redactor-styles p").html(text);

// Drupal Testad 2022
document.getElementById('edit-body-0-value').value= sentence;

// Text Input variants
document.getElementById("jform_title").value = titel;

document.getElementById('field-title').value = titel;
