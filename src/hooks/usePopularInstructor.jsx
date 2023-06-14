import { useEffect, useState } from "react";

const usePopularInstructor = () => {


    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://final-project-server-side-beta.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
                setLoading(false);
            });
    }, []);


    return [instructor, loading]
};

export default usePopularInstructor;



