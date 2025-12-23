"use client";

import { motion } from "framer-motion";

interface CaseStudyContentProps {
  content: string;
}

function parseMarkdown(content: string): string {
  let html = content.trim();
  
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold font-heading text-foreground mt-12 mb-4 first:mt-0">$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold font-heading text-foreground mt-8 mb-3">$1</h3>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
  html = html.replace(/^- (.+)$/gm, '<li class="text-muted-foreground ml-4 mb-2">$1</li>');
  
  const lines = html.split('\n');
  let inList = false;
  const processedLines: string[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isListItem = line.startsWith('<li');
    
    if (isListItem && !inList) {
      processedLines.push('<ul class="list-disc my-4 space-y-1">');
      inList = true;
    } else if (!isListItem && inList) {
      processedLines.push('</ul>');
      inList = false;
    }
    
    if (!isListItem && line.trim() && !line.startsWith('<h')) {
      processedLines.push(`<p class="text-muted-foreground leading-relaxed mb-4">${line}</p>`);
    } else if (line.trim()) {
      processedLines.push(line);
    }
  }
  
  if (inList) {
    processedLines.push('</ul>');
  }
  
  return processedLines.join('\n');
}

export function CaseStudyContent({ content }: CaseStudyContentProps) {
  const htmlContent = parseMarkdown(content);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
