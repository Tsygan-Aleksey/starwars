import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getItem, getResourses,
  isItemError,
  isItemLoaded,
  isItemLoading,
  ItemsAC,
} from "../../store";
import { Loader } from "../common";
import { ItemCard } from "./ItemCard";
import { useEffect } from "react";

export const Item = () => {
  const data = useSelector(getItem);
  const isLoading = useSelector(isItemLoading);
  const isError = useSelector(isItemError);
  const isLoaded = useSelector(isItemLoaded);
  const dispatch = useDispatch();
  const { type, id } = useParams();
  useEffect(() => {
    dispatch(ItemsAC.fetchItem(type, id));
  }, []);
  return (
    <div className="container">
      {isLoading && <Loader />}
      {isError && <span>Попробуйте позже</span>}
      {isLoaded && <ItemCard {...data} />}
    </div>
  );
};
