import CarCard from "../../components/CarCard";
import CommentCard from "../../components/CommentCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TitleCard from "../../components/TitleCard";
import TitleComment from "../../components/TitleComment";

export default function Home() {
    return (
        <>
            <Header />
            <TitleCard />
            <CarCard />
            <CarCard />
            <TitleComment />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <Footer />
        </>
    );
}