dataSetVersion = "2020-11-29"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Category",
    key: "stage",
    tooltip: "Check this to restrict characters.",
    checked: true,
    sub: [
      { name: "Main Cast", key: "cast" },
      { name: "Hosts", key: "host" },
      { name: "Recommended Characters", key: "recs" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "3D-Pritned Naily",
    img: "iNfOeWF.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "1970's Globey",
    img: "K0IWlfn.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Asthma Inhaler",
    img: "9yWsrPi.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Bouncy Ball",
    img: "Aml3sih.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Cheese Stick",
    img: "n9dOPEW.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "D100",
    img: "WKSOqy4.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Dicey",
    img: "h1OmOgw.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "KSSU",
    img: "CqjXn93.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Luigi Glove",
    img: "ZTXX9nV.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Marble",
    img: "l8e9BkX.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Marker",
    img: "AYtGZzg.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Monitor",
    img: "8KO7AWr.png",
    opts: {
      stage: ["cast"]
    }
  },
  {
    name: "Wario Land 4",
    img: "0lzYvui.png",
    opts: {
      stage: ["cast"]
    }
  }
];
