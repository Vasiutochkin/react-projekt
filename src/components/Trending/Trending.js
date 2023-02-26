import {apiService} from "../../service";

const Trending = () => {

    apiService.getAll(20)




    return (
        <div>
            Trending
            <h2>ТУТ МАЮТЬ БУТИ ФІЛЬМИ В ТРЕНДІ</h2>
        </div>
    );
};

export {Trending};