import SelectField from "components/SelectField";

interface ItemsPerPageProps {
  itemsPerPage: number;
  changeItemsPerPage(itemsPerPage: number): void;
}

const limitSelectOptions = [
  { value: "12", label: "12" },
  { value: "24", label: "24" },
  { value: "36", label: "36" },
];

export default function ItemsPerPage({ itemsPerPage, changeItemsPerPage }: ItemsPerPageProps) {
  return (
    <div className="my-1 md:my-0 md:mx-1 basis-1/8">
      <SelectField
        value={itemsPerPage.toString()}
        onChange={(event: any) => {
          changeItemsPerPage(parseInt(event.target.value));
        }}
        options={limitSelectOptions}
        label="Items Per Page"
      />
    </div>
  );
}
