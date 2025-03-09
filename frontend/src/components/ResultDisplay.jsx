export default function ResultDisplay({ data }) {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
}