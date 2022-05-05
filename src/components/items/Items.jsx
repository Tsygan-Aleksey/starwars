import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { debounce } from "lodash";
import { Card } from "../Card";
import { Input, Loader } from "../common";
import { useDispatch, useSelector } from "react-redux";
import {
  getResourses,
  isLoaded,
  isLoading,
  isError,
  ItemsAC,
} from "../../store/";

export const Items = () => {
  const items = useSelector(getResourses);
  const isItemsLoading = useSelector(isLoading);
  const isItemsError = useSelector(isError);
  const isItemsLoaded = useSelector(isLoaded);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { type } = useParams();

  const inputHandler = (event) => {
    setSearch(event.target.value);
  };
  const fetchData = (type, search) =>
    dispatch(ItemsAC.fetchResources(type, search));

  const debouncedItems = useCallback(debounce(fetchData, 1000), []);

  // useEffect(() => {
  //   fetchData(type, search)
  // }, []);

  useEffect(() => {
    debouncedItems(type, search);
  }, [type, search]);

  return (
    <div className="container">
      <Input value={search} onChange={inputHandler} />
      {isItemsLoading && <Loader />}
      {isItemsError && <span>Попробуйте позже</span>}
      {isItemsLoaded && (
        <div className="container">
          <div className="row">
            {items.map((item, index) => (
              <Card key={`id:${index}`} {...item} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
