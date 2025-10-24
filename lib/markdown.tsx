// Simple markdown to HTML converter
export function markdownToHtml(markdown: string): string {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*?)$/gm, "<h3 class='font-serif text-xl font-bold mt-6 mb-3'>$1</h3>")
  html = html.replace(/^## (.*?)$/gm, "<h2 class='font-serif text-2xl font-bold mt-8 mb-4'>$1</h2>")
  html = html.replace(/^# (.*?)$/gm, "<h1 class='font-serif text-3xl font-bold mt-10 mb-5'>$1</h1>")

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold'>$1</strong>")
  html = html.replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>")

  // Code blocks
  html = html.replace(
    /```(.*?)\n([\s\S]*?)```/g,
    "<pre class='bg-muted/10 p-4 rounded my-4 overflow-x-auto'><code class='font-mono text-sm'>$2</code></pre>",
  )

  // Inline code
  html = html.replace(/`(.*?)`/g, "<code class='bg-muted/10 px-2 py-1 rounded font-mono text-sm'>$1</code>")

  // Links
  html = html.replace(/\[(.*?)\]$$(.*?)$$/g, "<a href='$2' class='text-accent hover:underline'>$1</a>")

  // Paragraphs
  html = html
    .split("\n\n")
    .map((para) => {
      if (para.startsWith("<h") || para.startsWith("<pre") || para.startsWith("<ul") || para.startsWith("<ol")) {
        return para
      }
      return `<p class='mb-4 leading-relaxed'>${para}</p>`
    })
    .join("")

  return html
}
