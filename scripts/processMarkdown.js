const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const markdownFilesDirectory = path.join(__dirname, "src", "posts");
const outputDirectory = path.join(__dirname, "public", "posts");

const fileNames = fs.readdirSync(markdownFilesDirectory);

const allPosts = fileNames.map((fileName) => {
  const filePath = path.join(markdownFilesDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    content: content,
  };
});

// Write the parsed data to a JSON file in the public directory
fs.writeFileSync(
  path.join(outputDirectory, "posts.json"),
  JSON.stringify(allPosts, null, 2)
);
