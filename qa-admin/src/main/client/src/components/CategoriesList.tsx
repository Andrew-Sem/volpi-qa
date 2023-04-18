import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchCategories} from "../store/actions/categoryAction";
import {Category} from "./Category";
import {CategoriesListHead} from "./CategoriesListHead";

export const CategoriesList: FC = () => {
    const {categories} = useAppSelector(state => state.category)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    return (
        <div className={"rounded-lg  w-full"}>
            <CategoriesListHead/>
            <ul className={""}>
                {categories.map(c => (
                    <Category key={c.id} id={c.id} name={c.name} questions={c.questions}/>
                ))}
            </ul>
        </div>
    );
}
