/// <reference path="./api_image.ts" />
namespace Google {
  export const URI = (
    query = "Puppies",
    key = "AIzaSyBQk73LkIJBLB_O25Ro6q795ks8DWYQAOw",
    context = "001532126640155556502:f9o-ifgnlek",
  // tslint:disable-next-line:max-line-length
  ) => `https://www.googleapis.com/customsearch/v1?q=${query}&key=${key}&cx=${context}&searchType=image&imgSize=xxlarge`;
  export interface Image {
    title: string;
    link: string;
  }
  export interface DataFormat {
    items: Image[];
  }

  export const cookDataFormat = ({items}: DataFormat): API.Image[] => (
    items.map(({title, link}) => ({
      title, url: link,
    }),
  ));
}
