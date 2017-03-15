export const URI = (
  query = "1920x1080 dog",
  key = "AIzaSyBQk73LkIJBLB_O25Ro6q795ks8DWYQAOw",
  context = "001532126640155556502:f9o-ifgnlek"
) => `https://www.googleapis.com/customsearch/v1?q=${query}&key=${key}&cx=${context}&searchType=image`;

export const cookDataFormat = ({items}) =>
  items.map(({title, link}) => ({
    title,
    "url": link
  })
);
