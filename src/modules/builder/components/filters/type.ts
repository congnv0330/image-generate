import { ICategoryResponse } from "src/apis/category/types";
import { IImageParams, IImageResponse } from "src/apis/image/types";
import { IFilter } from "src/common/interfaces";

export interface IMBuilderFilterProps {
  categories?: ICategoryResponse[];
  images?: IImageResponse[];
  value: IFilter[];
  onChange: (data: IFilter[]) => void;
  onSearch: (params: IImageParams) => void;
}
