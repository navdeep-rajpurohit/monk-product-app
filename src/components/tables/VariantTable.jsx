import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useStyles } from "../../styles/styles";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import ProductList from "../ProductList";

const VariantTable = ({
  variant,
  variantIndex,
  handleToggleDiscountVariant,
  handleDeleteVariant,
  index,
  productsList,
}) => {
  const classes = useStyles();
  return (
    <div key={variant.id} className={classes.variantRow}>
      <DragIndicatorIcon color="default" className={classes.dragIcon} />
      <TextField
        size="small"
        variant="outlined"
        value={variant.title}
        InputProps={{
          readOnly: true,
          sx: { borderRadius: 5, backgroundColor: "white" },
        }}
        style={{
          marginRight: 16,
        }}
      />
      {variant.addDiscount && (
        <>
          <TextField
            variant="outlined"
            value={variant.discount?.value}
            InputProps={{
              sx: {
                borderRadius: 0,
              },
            }}
            style={{
              width: 60,
              marginRight: 8,
            }}
            className={classes.discountInput}
            type="number"
            size="small"
            sx={{ boxShadow: 2 }}
          />
          <Select
            defaultValue={"flat"}
            sx={{ boxShadow: 2 }}
            displayEmpty
            size="small"
            inputProps={{
              "aria-label": "Without label",
              borderRadius: 0,
            }}
            style={{ width: 100 }}
          >
            <MenuItem value={"flat"}>flat off</MenuItem>
            <MenuItem value={"percent"}>% off</MenuItem>
          </Select>{" "}
        </>
      )}
      {!variant.addDiscount && (
        <Button
          variant="contained"
          color="secondary"
          className={classes.discountButton}
          style={{ textTransform: "none", width: 168 }}
          onClick={() => handleToggleDiscountVariant(index, variantIndex)}
        >
          Add Discount
        </Button>
      )}

      {productsList.variants.length > 1 ? (
        <IconButton
          onClick={() => handleDeleteVariant(index, variantIndex)}
          className={classes.deleteButton}
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton sx={{ visibility: "hidden" }}>
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
};

export default VariantTable;
