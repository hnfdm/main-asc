import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks';

const Read = () => {
  const markdownBeforeForm = `
  Test Embed using Mirror XYZ
  `;

  const siteBackgroundColor = '#000';

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', color: 'white', textAlign: 'justify' }}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            <div style={{ 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}>
              <img
                {...props}
                alt={props.alt || "Image"}
                style={{ maxWidth: "75%", height: "auto", margin: "5px 0" }}
              />
            </div>
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CopyBlock
                text={String(children).replace(/\n$/, '')}
                language={match[1]}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {markdownBeforeForm}
      </ReactMarkdown>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center',backgroundColor: siteBackgroundColor }}>
        <iframe
          src="https://dev.mirror.xyz/bvwJel93C8R-g9Pbiy1uMteS5UBf5-dYExJ3fcprrDQ"
          //src="https://x.com/Autosultan_team/status/1883913244257165382"
          width="100%"
          height="2500"
          frameBorder="0"
          title="Mirror Content"
          style={{ 
            maxWidth: '1200px',
            borderRadius: '15px' // Border radius langsung pada iframe
          }}
        />
      </div>
    </div>
  );
};

export default Read;