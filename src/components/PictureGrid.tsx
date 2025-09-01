import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { PictureGridProps } from "@/types";
import { useMediaQuery } from "react-responsive";
import "@/styles/PictureGrid.css";

export default function PictureGrid({ items, viewMode, onItemClick }: PictureGridProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const columnCount = isMobile ? 3 : 6;
  const totalItems = items.length;

  if (viewMode === "list" && isMobile) {
    return (
      <div className="pic-list">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className="pic-list-item"
          >
            <ImageWithFallback src={item.images[0]} alt={item.title} />
          </div>
        ))}
      </div>
    );
  }

  const numFullRows = Math.floor(totalItems / columnCount);

  const fullGridItems = items.slice(0, numFullRows * columnCount);
  const remainderItems = items.slice(numFullRows * columnCount);

  return (
    <div className="pic-grid-container">
      {fullGridItems.length > 0 && (
        <div className="pic-grid-full-rows" style={{
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`
        }}>
          {fullGridItems.map((item) => {

            return (
              <div
                key={item.id}
                onClick={() => onItemClick(item)}
                className="pic-grid-item"
              >
                <ImageWithFallback src={item.images[0]} alt={item.title} />
              </div>
            );
          })}
        </div>
      )}

      {remainderItems.length > 0 && (
        <div className="pic-grid-remainder-row" style={{
          // Calculate item width to match grid items
          "--item-width": `calc((100% - ${(columnCount - 1) * 2}px) / ${columnCount})`
        } as React.CSSProperties}>
          {remainderItems.map((item, index) => {
            let itemClasses = [];

            // Radiuses of first and last items in remainder row
            if (index === 0) itemClasses.push("rounded-bl");
            if (index === remainderItems.length - 1) itemClasses.push("rounded-br");
            return (
              <div
                key={item.id}
                onClick={() => onItemClick(item)}
                className={`pic-grid-item remainder-item ${itemClasses.join(" ")}`}
              >
                <ImageWithFallback src={item.images[0]} alt={item.title} className="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
