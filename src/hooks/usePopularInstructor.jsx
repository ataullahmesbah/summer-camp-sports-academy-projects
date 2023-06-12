import { useEffect, useState } from "react";

const usePopularInstructor = () => {


    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
                setLoading(false);
            });
    }, []);


    return [instructor, loading]
};

export default usePopularInstructor;



