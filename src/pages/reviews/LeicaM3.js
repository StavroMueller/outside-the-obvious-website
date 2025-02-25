import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Markdown from 'react-markdown'

const LeicaM3 = () => {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch("/markdown/reviews/leicam3.md") // Adjust path if needed
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    }, []);

    return (
        <Container>
            <h1>Leica M3</h1>
            <Markdown>{markdown}</Markdown>
        </Container>
    )

}

export default LeicaM3;