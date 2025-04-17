export function Space({ name, color, price, gridRow, gridCol }) {
    

    return (
        <div
            className="flex flex-col items-center justify-between border border-black p-0 md:p-0 text-xs"
            style={{
                backgroundColor: "#f5f5dc", // Default Monopoly beige
                gridRow: gridRow,
                gridColumn: gridCol,
                overflow: "hidden"
            }}
        >
            {/* Property Color Strip (20% Height) */}
            {color && (
                <div
                    className="w-full"
                    style={{
                        backgroundColor: color,
                        height: "20%",
                    }}
                />
            )}

            {/* Property Name */}
            <span className="text-xs text-center flex-1 flex items-center justify-center">
                {name}
            </span>

            {/* Property Price */}
            {price && <span className="text-xs">{`$${price}`}</span>}
        </div>
    );
}
