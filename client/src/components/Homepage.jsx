import books from "../assets/books.png";

export default function homepage() {
    return (
        <div className="homepage">
            <h1>home</h1>
            <img src={books} alt="books" />
        </div>
    );
}