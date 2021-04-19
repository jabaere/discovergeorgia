import React from "react";
import { Box } from "@material-ui/core/";
import "./styles.css";
import telavi from "./telavi.jpg";
import lagodekhi from "./lagodekhi.jpg";
import khevsureti from "./khevsureti.jpg";
import tusheti from "./tusheti.jpg";
import kazbegi from "./kazbegi.jpg";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
  FacebookMessengerIcon
} from "react-share";
import Modal from "@material-ui/core/Modal";
const style = {
  background: "linear-gradient(45deg, #373B44 30%, #4286f4 90%)",
  border: 0,
  fontSize: 16,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px #373B44",
  color: "white",
  height: 48,
  padding: "0 30px"
};
const cardStyle = {
  maxWidth: "700px",
  margin: "0 auto"
};
const cardMedia = {
  height: "400px"
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Discover Georgia",
      header2: "Best place in earth",
      price: "",
      about: "",
      contact: "",
      anchorEl: false,
      region: ""
    };
    this.btnClickPrice = this.btnClickPrice.bind(this);
    this.btnClickAbout = this.btnClickAbout.bind(this);
    this.btnClickContact = this.btnClickContact.bind(this);
    this.btnClickHome = this.btnClickHome.bind(this);
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.target
    });
  }
  handleClose() {
    this.setState({
      anchorEl: null
    });
  }
  btnClickPrice() {
    this.setState({
      header: "",
      header2: "",
      price: <Price />,
      about: "",
      contact: "",
      region: "",
      anchorEl: false
    });
  }
  btnClickAbout() {
    this.setState({
      header: "",
      header2: "",
      price: "",
      about: <About />,
      contact: "",
      region: "",
      anchorEl: false
    });
  }
  btnClickContact() {
    this.setState({
      header: "",
      header2: "",
      price: "",
      about: "",
      contact: <Contact />,
      region: "",
      anchorEl: false
    });
  }
  btnClickHome() {
    this.setState({
      header: "Discover Georgia",
      header2: "Best place in earth",
      price: "",
      about: "",
      contact: "",
      region: "",
      anchorEl: false
    });
  }
  btnClickTelavi() {
    this.setState({
      header: "",
      header2: "",
      price: "",
      about: "",
      contact: "",
      open: false,
      region: <Telavi />,
      anchorEl: null
    });
  }
  btnClickLagodekhi() {
    this.setState({
      header: "",
      header2: "",
      price: "",
      about: "",
      contact: "",
      region: <Lagodekhi />,
      anchorEl: null
    });
  }
  btnClickTusheti() {
    this.setState({
      header: "",
      header2: "",
      price: "",
      about: "",
      contact: "",
      region: <Tusheti />,
      anchorEl: null
    });
  }
  btnClickKhevsureti() {
    this.setState({
      header: "",
      header2: "",
      price: "",
      about: "",
      contact: "",
      region: <Khevsureti />,
      anchorEl: null
    });
  }
  btnClickKazbegi() {
    this.setState({
      header: "",
      header2: "",
      price: "",
      about: "",
      contact: "",
      region: <Kazbegi />,
      anchorEl: null
    });
  }
  render() {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    theme.typography.body1 = {
      fontSize: "18px",
      margin: "5px",
      marginTop: "14px",
      "@media (max-width:760px)": {
        fontSize: "16px",
        margin: "5px",
        marginTop: "15px"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
        margin: "15px"
      }
    };
    return (
      <Box>
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            style={style}
            max-width="95%"
            className="container"
            justifyContent="flex-start"
          >
            <Typography onClick={this.btnClickHome}>Home</Typography>
            <Typography onClick={this.btnClickPrice}>Price</Typography>
            <Typography onClick={this.btnClickAbout}>About</Typography>

            <Typography
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick.bind(this)}
            >
              Destinations
            </Typography>
            <Typography onClick={this.btnClickContact}>Contact</Typography>

            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose.bind(this)}
            >
              <MenuItem onClick={this.btnClickTelavi.bind(this)}>
                Telavi
              </MenuItem>
              <MenuItem onClick={this.btnClickLagodekhi.bind(this)}>
                Lagodekhi
              </MenuItem>
              <MenuItem onClick={this.btnClickTusheti.bind(this)}>
                Tusheti
              </MenuItem>
              <MenuItem onClick={this.btnClickKhevsureti.bind(this)}>
                Khevsureti
              </MenuItem>
              <MenuItem onClick={this.btnClickKazbegi.bind(this)}>
                Kazbegi
              </MenuItem>
            </Menu>
          </Box>
        </ThemeProvider>
        <Box id="h1" component="h1" align="center" color="white" mt={4}>
          {this.state.header}
        </Box>
        <Box id="p" align="center" component="h2" color="white" mt={3}>
          {this.state.header2}
        </Box>
        <ThemeProvider theme={theme}>
          {this.state.price}
          {this.state.about}
          {this.state.contact}
          {this.state.region}
        </ThemeProvider>
      </Box>
    );
  }
}

class Price extends React.Component {
  render() {
    const cities = [
      { name: "Telavi", price: "100$", id: 1 },
      { name: "Lagodekhi", price: "200$", id: 2 },
      { name: "Tusheti", price: "300$", id: 3 },
      { name: "Khevsureti", price: "300$", id: 4 },
      { name: "Kazbegi", price: "350$", id: 5 }
    ];

    return (
      <div>
        <TableContainer component={Paper} id="pp">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "#ff9100" }}>Region</TableCell>
                <TableCell style={{ color: "#ff9100" }} align="justify">
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cities.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell align="justify">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          component={Paper}
          align="center"
          color="text.primary"
          bgcolor="warning.main"
          className="pp"
        >
          <Box component="h1" p={5}>
            {" "}
            The price is given for 1-4 people maximum!{" "}
          </Box>
        </Box>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <Typography
        variant="body1"
        color="textPrimary"
        style={{ width: "70%", margin: "0 auto" }}
      >
        <Box id="name" align="center" component="h1" color="white">
          About Us
        </Box>
        <Box align="justify" paragraph={true} component={Paper} p={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Box>
      </Typography>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <Typography
        variant="body1"
        color="textPrimary"
        style={{ width: "70%", margin: "0 auto" }}
      >
        <Box align="justify" paragraph={true} component={Paper} p={3}>
          <Box component="p">Contact person: hjsgdhjas sdgadygsyayusdg,</Box>
          <Box component="p">mail: ddddd@gmail.com,</Box>
          <Box component="p">phone: 7765565655,</Box>
          <Box component="p">our social networks</Box>
          <Box>
            <Link href="https://www.facebook.com/">
              <FacebookIcon logoFillColor="white" />
            </Link>
            <Link href="https://www.twitter.com/">
              <TwitterIcon logoFillColor="white" />
            </Link>
            <Link href="https://www.messenger.com/">
              <FacebookMessengerIcon logoFillColor="white" />
            </Link>
          </Box>
        </Box>
      </Typography>
    );
  }
}
class ModalContent extends React.Component {
  render() {
    return (
      <div style={{ width: "70px" }}>
        <Box
          display="flex"
          p={3}
          flexDirection="column"
          alignItems="flex-start"
          mt={15}
        >
          <FacebookShareButton url="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v10.0">
            <FacebookIcon logoFillColor="white" />
          </FacebookShareButton>
          <TelegramShareButton url="#">
            <TelegramIcon logoFillColor="white" />
          </TelegramShareButton>
          <EmailShareButton url="#">
            <EmailIcon logoFillColor="white" />
          </EmailShareButton>
          <TwitterShareButton url="#">
            <TwitterIcon logoFillColor="white" />
          </TwitterShareButton>
          <ViberShareButton url="#">
            <ViberIcon logoFillColor="white" />
          </ViberShareButton>
          <WhatsappShareButton url="#">
            <WhatsappIcon logoFillColor="white" />
          </WhatsappShareButton>
        </Box>
      </div>
    );
  }
}
class Telavi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen() {
    this.setState({
      open: true
    });
  }
  handleClose() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia style={cardMedia} image={telavi} title="telavi" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Telavi
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Telavi (Georgian: თელავი [tʰɛlɑvi]) is the main city and
              administrative center of Georgia's eastern province of Kakheti.
              Its population consists of some 19,629 inhabitants (as of the year
              2014).[1] The city is located on the foothills of the Tsiv-Gombori
              Range at 500–800 m (1,600–2,600 ft) above sea level.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={this.handleOpen.bind(this)}
          >
            Share
          </Button>
          <Modal open={this.state.open} onClose={this.handleClose.bind(this)}>
            <ModalContent />
          </Modal>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              const url = "https://en.wikipedia.org/wiki/Stepantsminda";
              window.open(url, "_blank");
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
class Lagodekhi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen() {
    this.setState({
      open: true
    });
  }
  handleClose() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia style={cardMedia} image={lagodekhi} title="lagodekhi" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lagodekhi
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lagodekhi (Georgian: ლაგოდეხი) is a town, located at the foot of
              the Greater Caucasus mountains between the rivers Lagodekhiskhevi
              and Shromiskhevi, in the historical region of Hereti (now part of
              Kakheti). Lagodekhi has a number of nearby waterfalls and includes
              the Lagodekhi Nature Reserve, established in 1912 and first noted
              by Polish botanist Ludwik Młokosiewicz for having a variety of
              tree species. Three kilometers east of the town is the border
              crossing with Azerbaijan's Balakan Province. Lagodekhi is in the
              Kakheti district of Georgia.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={this.handleOpen.bind(this)}
          >
            Share
          </Button>
          <Modal open={this.state.open} onClose={this.handleClose.bind(this)}>
            <ModalContent />
          </Modal>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              const url = "https://en.wikipedia.org/wiki/Lagodekhi";
              window.open(url, "_blank");
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
class Tusheti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen() {
    this.setState({
      open: true
    });
  }
  handleClose() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia style={cardMedia} image={tusheti} title="tusheti" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tusheti
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Located on the northern slopes of the Greater Caucasus Mountains,
              Tusheti is bordered by the Russian republics of Chechnya and
              Dagestan to the north and east, respectively; and by the Georgian
              historic provinces Kakheti and Pshav-Khevsureti to the south and
              west, respectively.[1] The population of the area is mainly ethnic
              Georgians called Tushs or Tushetians (Georgian: tushebi).
              Historically, Tusheti comprised four mountain communities: the
              Tsova (living in the Tsova Gorge), the Gometsari (living along the
              banks of the Tushetis Alazani River), the Pirikiti (living along
              the banks of the Pirikitis Alazani River) and the Chaghma, living
              close to the confluence of the two rivers). Administratively
              speaking, Tusheti is now part of the raioni of Akhmeta, itself
              part of Georgia's eastern region of Kakheti. The largest village
              in Tusheti is Omalo.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={this.handleOpen.bind(this)}
          >
            Share
          </Button>
          <Modal open={this.state.open} onClose={this.handleClose.bind(this)}>
            <ModalContent />
          </Modal>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              const url = "https://en.wikipedia.org/wiki/Tusheti";
              window.open(url, "_blank");
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
class Khevsureti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen() {
    this.setState({
      open: true
    });
  }
  handleClose() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia style={cardMedia} image={khevsureti} title="khevsureti" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Khevsureti
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Khevsureti (Georgian: ხევსურეთი, a land of valleys) is a
              historical-ethnographic region in eastern Georgia. They are the
              branch of Kartvelian (Georgian) people located along both the
              northern (Pirikita khevsureti, Georgian: პირიქითა ხევსურეთი) and
              southern (Piraketa khevsureti, Georgian: პირაქეთა ხევსურეთი)
              slopes of the Great Caucasus Mountains.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={this.handleOpen.bind(this)}
          >
            Share
          </Button>
          <Modal open={this.state.open} onClose={this.handleClose.bind(this)}>
            <ModalContent />
          </Modal>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              const url = "https://en.wikipedia.org/wiki/Khevsureti";
              window.open(url, "_blank");
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
class Kazbegi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen() {
    this.setState({
      open: true
    });
  }
  handleClose() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia style={cardMedia} image={kazbegi} title="kazbegi" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Kazbegi
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Stepantsminda (Georgian: სტეფანწმინდა; formerly Kazbegi, ყაზბეგი),
              is a townlet in the Mtskheta-Mtianeti region of north-eastern
              Georgia. Historically and ethnographically, the town is part of
              the Khevi province. It is the center of the Kazbegi Municipality.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={this.handleOpen.bind(this)}
          >
            Share
          </Button>
          <Modal open={this.state.open} onClose={this.handleClose.bind(this)}>
            <ModalContent />
          </Modal>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              const url = "https://en.wikipedia.org/wiki/Stepantsminda";
              window.open(url, "_blank");
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
