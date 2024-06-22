import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Grid } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddToCartModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [quantityItems, setquantityItems] = React.useState(0);

  const increase = () => {
    setquantityItems(quantityItems + 1);
  };

  const decrease = () => {
    if (quantityItems === 0) {
      return;
    }
    setquantityItems(quantityItems - 1);
  };

  const flavor = [
    {
      text: "Chocolate",
      isCompleted: true,
    },
    {
      text: "Matcha Green Tea",
      isCompleted: true,
    },
    {
      text: "Vanilla",
      isCompleted: true,
    },
    {
      text: "Cafe Mocha",
      isCompleted: false,
    },
    {
      text: "Super Yummy Japanese Home Made Orange Yuzu",
      isCompleted: true,
    },
  ];

  const size = [
    {
      text: "1lb",
      isCompleted: true,
    },
    {
      text: "2lb",
      isCompleted: true,
    },
    {
      text: "3lb",
      isCompleted: true,
    },
  ];
  const createflavorSet = () => {
    const flavorSet: JSX.Element[] = [];
    flavor.forEach((item) => {
      const { text, isCompleted } = item;

      flavorSet.push(
        <ToggleButton
          style={{ marginLeft: 10 }}
          value={text}
          disabled={!isCompleted}
        >
          {text}
        </ToggleButton>
      );
    });
    // console.log("typeSet");
    // console.log(typeSet);
    return flavorSet;
  };

  const createSizeSet = () => {
    const sizeSet: JSX.Element[] = [];
    size.forEach((item) => {
      const { text, isCompleted } = item;

      sizeSet.push(
        <ToggleButton style={{ marginLeft: 10 }} value={text}>
          {text}
        </ToggleButton>
      );
    });
    // console.log("typeSet");
    // console.log(typeSet);
    return sizeSet;
  };

  let sizeSet: JSX.Element[] = [];
  sizeSet = createSizeSet();

  let flavorSet: JSX.Element[] = [];
  flavorSet = createflavorSet();

  const [alignment, setAlignment] = React.useState("web");
  const [alignmentforSize, setAlignmentforSize] = React.useState("web");
  const handleChangeforSize = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignmentforSize(newAlignment);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        color="primary"
        variant="contained"
        style={{ width: "100%" }}
      >
        Add to Cart
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={style}
          style={{
            width: "75%",
            height: "90%",
            borderRadius: "30px",
            border: "1px solid #000",
          }}
        >
          {/* {head} */}
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <div className="qcart-info-right">
              <span className="qcart-title">
                BAAM MY WHEY PROTEIN 1 LB เวย์โปรตีน เพิ่มกล้ามเนื้อ
              </span>
              <p className="qcart-des">
                {" "}
                BAAM!! MY WHEY เป็นเวย์ที่มีส่วนผสมของ Whey protein Concentrate
                เป็นหลัก ที่มีความคุ้มค่าด้านราคาสูง และสามารถให้ผลได้จริง
                ตอบโจทย์ได้ทุกเป้าหมาย ไม่ว่าจะเพิ่มกล้ามเนื้อ หรือลดไขมัน
                สามารถใช้ได้ทั้งผู้ชาย และผู้หญิง BAAM!! MY WHEY
                จึงเหมาะสำหรับเป็นเวย์ถุงแรกของทุกคน
              </p>
            </div>
          </Typography>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            style={{
              font: "500 16px / 24px  ",
              paddingInlineEnd: "5px",
              margin: 0,
              color: "#0058ff",
            }}
          >
            Please select your options
          </Typography>

          <Typography
            id="keep-mounted-modal-detail"
            variant="h6"
            component="h2"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "0 0 8px 0",
              color: "#f55e00",
              font: "normal 13px / 18px",
            }}
          >
            EXP:20/2021
          </Typography>
          {/* {body} */}
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {" "}
            Size (Select 1)
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            style={{
              marginTop: "10px",
            }}
          >
            <div>{sizeSet}</div>
          </ToggleButtonGroup>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            style={{ font: "500 16px / 20px ", margin: "10px 0" }}
          >
            Flavor / Selections (Select 1)
            {/* {buttom group} */}
          </Typography>

          <ToggleButtonGroup
            color="primary"
            value={alignmentforSize}
            exclusive
            onChange={handleChangeforSize}
            aria-label="Platform"
          >
            <div>{flavorSet}</div>
          </ToggleButtonGroup>

          {/* {bottom} */}

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "right",
              marginTop: "20px",
            }}
          >
            <Grid item style={{}}>
              <h1 style={{ marginBottom: "20px" }}>Quantity</h1>
            </Grid>
            <Grid item style={{}}>
              <Grid
                container
                spacing={2}
                style={{ display: "flex", justifyContent: "right" }}
              >
                <Button
                  onClick={decrease}
                  color="primary"
                  variant="contained"
                  style={{ marginLeft: "10px" }}
                >
                  -
                </Button>
                <div style={{ marginLeft: "10px", marginTop: "8px" }}>
                  {" "}
                  {quantityItems}
                </div>

                <Button
                  onClick={increase}
                  color="primary"
                  variant="contained"
                  style={{ marginLeft: "10px" }}
                >
                  +
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            style={{ width: "100%", marginTop: "20px" }}
          >
            {" "}
            Add to Cart
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
