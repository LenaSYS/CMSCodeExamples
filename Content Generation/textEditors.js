// CodeMirror (bla Grav) Testad 2023
// https://stackoverflow.com/questions/8378678/how-can-i-set-the-value-of-a-codemirror-editor-using-javascript
document.querySelector('.CodeMirror').CodeMirror.setValue('Greger');

// Silverstripe (många steg med textboxar) Testad 2022
// var bodyArea = document.getElementById("Form_EditForm_Content");
bodyArea.value = str;

// Joomla Testad 2022
tinymce.activeEditor.execCommand('mceInsertRawHTML', false, str);

// Generate Raw HTML
text += "<ul>"
for (var i = 0; i < loopsize; i++) {
text += "<li>"+bulletList + "</li>"
}
text += "</ul>”;

// Mediawiki Testad 2022
var textArea = document.getElementById('wpTextbox1');
textArea.value = str;

// Bolt Testad 2022 (Data inlagd med Jquery)
$(".redactor-styles p").html(text);

// Drupal Testad 2022
document.getElementById('edit-body-0-value').value= sentence;
