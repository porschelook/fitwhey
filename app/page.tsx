"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TabButton } from "./components/TabButton";
import { TabContent } from "./components/TabContent";
import ButtonBase from "@mui/material/ButtonBase";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { colors } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

import { styled } from "@mui/material/styles";
import AddToCartModal from "./components/AddToCartModal";
interface Image {
  id: number;
  name: string;
  url: string;
}
const images = [
  {
    id: 1,
    name: "image_1",
    url: "./img/place-holder0.png",
  },
  {
    id: 2,
    name: "image_2",
    url: "./img/place-holder0-1.png",
  },
  {
    id: 3,
    name: "image_3",
    url: "./img/place-holder3.png",
  },
];
const portion = [
  {
    text: "250g",
    isCompleted: true,
  },
  {
    text: "2lb",
    isCompleted: true,
  },
  {
    text: "5lb",
    isCompleted: true,
  },
  {
    text: "10lb",
    isCompleted: true,
  },
  {
    text: "12lb",
    isCompleted: true,
  },
];
const createSizeset = () => {
  const typeSet: JSX.Element[] = [];
  portion.forEach((item) => {
    const { text, isCompleted } = item;

    typeSet.push(
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
  return typeSet;
};

let typeSet: JSX.Element[] = [];
typeSet = createSizeset();
console.log(typeSet);

export default function Home() {
  const tabs = [
    "Overview",
    "Benefit",
    "Direction",
    "Storage Medthod",
    "Cautions",
    "Q&A",
  ] as const;

  const [currentTab, setCurrentTab] = useState<(typeof tabs)[number]>(tabs[1]);

  const [selectedId, setSelectdId] = useState<number>(1);

  const prevImage = () => {
    setSelectdId((prev) => (prev <= 1 ? images.length : prev - 1));
  };
  const nextImage = () => {
    setSelectdId((prev) => (prev >= images.length ? 1 : prev + 1));
  };

  const [value, setValue] = React.useState<number | null>(2);

  const [alignment, setAlignment] = React.useState("web");

 
  const handleViewSupplementFact = () => {
    console.log("View Supplement Fact");
  };


  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Stack spacing={2} direction="row">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MessageIcon color="action" />
          </Badge>
        </Stack>
      </div>

      {/* image slider */}
      <div className="image">
        <div className="image_slider">
          <div className="images">
            {images
              .filter((image) => image.id === selectedId)
              .map((image) => {
                return <img key={image.id} src={image.url} alt={image.name} />;
              })}
          </div>

          <div className="thumbnails">
            {images.map((image: Image) => {
              return (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.name}
                  onClick={() => setSelectdId(image.id)}
                />
              );
            })}
          </div>
          <button className="button_prev" onClick={prevImage}>
            <span style={{ fontSize: 30 }}> &#8592; </span>
          </button>

          <button className="button_next" onClick={nextImage}>
            <span style={{ fontSize: 30 }}>&#8594;</span>
          </button>
        </div>
      </div>
      {/* information of product */}
      <div className="add_to_cart">
        {/* name */}
        <h1>BAAM 100% MY WHEY</h1> {/* review of product */}
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">200 Reviews</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
      {/* typeSet */}
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <div>{typeSet}</div>
      </ToggleButtonGroup>
      {/* description */}
      <p>
        BAAM 100% MY WHEY is a high-quality whey protein powder that is perfect
        for those looking to build muscle and increase strength. It is made from
        the highest quality whey protein isolate and whey protein concentrate,
        and is free from artificial colors, flavors, and sweeteners.
      </p>
      {/* view supplement fact */}
      <Button variant="outlined" onClick={handleViewSupplementFact}>
        View Supplement Fact
      </Button>
      {/* Tab */}

      <div>
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            text={tab}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        ))}
        <TabContent currentTab={currentTab} />
      </div>

      <div>
        <Grid container spacing={2} style={{ paddingLeft: 50 }}>
          <Grid item style={{ marginLeft: "50px" }} xs={2} md={2}>
            <h1>Customer Review</h1>
          </Grid>
          <Grid item style={{ marginLeft: "50px" }} xs={2} md={2}>
            <h1 style={{ color: "#f29c38", fontSize: "18px", zIndex: 1 }}>
              ★★★★★ 4/5 (200 Reviews)
            </h1>
          </Grid>
          <Grid item style={{ marginLeft: "50px" }} xs={6} md={6}>
            <Button variant="outlined" onClick={handleClickOpen}>
              Write Review
            </Button>
          </Grid>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>write review</DialogTitle>
          <DialogContent>
            <DialogContentText>write review ContentText</DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="review"
              label="review"
              type="review"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">submit</Button>
          </DialogActions>
        </Dialog>

        <Paper
          sx={{
            p: 2,
            margin: "5",
            maxWidth: "100%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <AccountCircleIcon />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Barack Obama
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    ★★★★★ 12 March 2022 |{" "}
                    <h1 style={{ color: "green" }}>
                      {" "}
                      <CheckIcon /> Verified Buyer Vanilla Milkshake
                    </h1>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit met, consecterur adipiscing elit, ed
                    Do eius mod tempor incididut ut labore te dfdf dfsdfdf
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <ThumbUpIcon />
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <AccountCircleIcon />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Barack Obama
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    ★★★★★ 12 March 2022 |{" "}
                    <h1 style={{ color: "green" }}>
                      {" "}
                      <CheckIcon /> Verified Buyer Vanilla Milkshake
                    </h1>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit met, consecterur adipiscing elit, ed
                    Do eius mod tempor incididut ut labore te dfdf dfsdfdf
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <ThumbUpIcon />
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <AccountCircleIcon />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Barack Obama
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    ★★★★★ 12 March 2022 |{" "}
                    <h1 style={{ color: "green" }}>
                      {" "}
                      <CheckIcon /> Verified Buyer Vanilla Milkshake
                    </h1>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit met, consecterur adipiscing elit, ed
                    Do eius mod tempor incididut ut labore te dfdf dfsdfdf
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <ThumbUpIcon />
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      {/* add to cart button */}
      <Box sx={{ "& button": { m: 1 } }}>
        <div id="footer">
          <AddToCartModal />
        </div>
      </Box>
    </div>
  );
}
