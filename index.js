const STAGE_OPERATORS = require('mongodb-ace-autocompleter').STAGE_OPERATORS;

const snippetTemplate = (prefix, description, snippet, comment) => {
    return {
        prefix,
        body: [...comment.split('\n'), ...snippet.split('\n')],
        description
    }
}

const snippets = STAGE_OPERATORS.reduce((prev, curr) => {
    prev[`MongoDB Aggregations ${curr.name}`] = snippetTemplate(curr.label, curr.description, curr.snippet, curr.comment);
    return prev;
}, {})

const javaSnippets = 

console.log(JSON.stringify(snippets, null, 4));