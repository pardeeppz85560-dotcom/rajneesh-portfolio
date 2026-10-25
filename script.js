
const upload = document.getElementById("profileUpload");
const preview = document.getElementById("profilePreview");

upload.addEventListener("change", function () {
  const file = this.files[0];

  if (file && file.type.startsWith("image/")) {
    preview.src = URL.createObjectURL(file);
  }
});
