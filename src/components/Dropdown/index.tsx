import Select, { SelectRenderer } from "react-dropdown-select";
import { AutoSizer, List } from "react-virtualized";

interface DropdownProps {
  options: { value: string; label: string }[];
  values: { value: string; label: string }[];
  loading?: boolean;
  placeholder?: string;
  onChange?: (value: { value: string; label: string }) => void;
}

export const Dropdown = ({
  options,
  values,
  loading,
  placeholder,
  onChange,
}: DropdownProps) => {
  const customDropdownRenderer = ({
    methods,
  }: SelectRenderer<{ value: string; label: string }>) => {
    const items = options.filter(
      (option) => !values.find((value) => value.value === option.value)?.value
    );
    const rowHeight = 60;
    const totalHeight = items.length * rowHeight;

    return (
      <div className="">
        <AutoSizer disableHeight>
          {({ width }: { width: number }) => (
            <List
              className=""
              height={totalHeight}
              rowCount={items.length}
              rowHeight={rowHeight}
              width={width - 2}
              rowRenderer={({ index, style, key }) => (
                <div
                  className="w-auto h-full text-sm flex items-center justify-start px-4 cursor-pointer hover:bg-gray-100"
                  key={key}
                  style={style}
                  onClick={() => methods.addItem(items[index])}
                >
                  {items[index].label}
                </div>
              )}
            />
          )}
        </AutoSizer>
      </div>
    );
  };
  return (
    <div className="w-full rounded-full">
      <Select
        dropdownRenderer={customDropdownRenderer}
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
        options={options}
        values={values}
        loading={loading}
        placeholder={placeholder}
        onChange={(value) => {
          onChange && onChange(value[0]);
        }}
      />
    </div>
  );
};
