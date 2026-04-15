let documents = [];

function saveData(text) {
    documents.push(text);
    console.log("DATA SAVED ✅");
}

function getAnswer(query) {
    if (documents.length === 0) {
        return "No documents found. Upload a file first.";
    }

    const lowerQuery = query.toLowerCase();

    for (let doc of documents) {
        const lowerDoc = doc.toLowerCase();
        const index = lowerDoc.indexOf(lowerQuery);

        if (index !== -1) {
            const start = Math.max(0, index - 100);
            const end = Math.min(doc.length, index + 200);

            return doc.slice(start, end);
        }
    }

    return "No relevant answer found";
}

module.exports = { saveData, getAnswer }; 