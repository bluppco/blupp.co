import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";

const BlogBody = ( props ) => {

    const { html } = props
    useEffect(() => {

        hljs.highlightAll();

    }, []);

    return (
        <article dangerouslySetInnerHTML={{ __html: html }}></article>
    )

}

export default BlogBody
