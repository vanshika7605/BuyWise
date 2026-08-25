import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import laptops from "./data/laptops";
import { parseQuery } from "./utils/parseQuery";
import { rankLaptops } from "./utils/scoring";

function NewComponent(props) {
  const [weights, setWeights] = useState({
    performance: 25,
    gaming: 20,
    battery: 15,
    display: 10,
    portability: 10,
    value: 20,
  });

  const searchData = props?.searchData;
  const searchQuery = searchData?.query || "";

  useEffect(() => {
    props?.messageHandlers?.componentLoaded();
  }, [props]);

  const preferences = parseQuery(searchQuery);

  const rankedLaptops = rankLaptops(
    laptops,
    weights,
    preferences
  );

  const bestLaptop = rankedLaptops[0];

  const updateWeight = (name, value) => {
    setWeights((current) => ({
      ...current,
      [name]: Number(value),
    }));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        boxSizing: "border-box",
        background: "#f7f8fc",
        py: 2,
        px: 0,
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1500px",
          mx: "auto",
          px: {
            xs: 1.5,
            sm: 3,
            md: 5,
            lg: 7,
          },
          boxSizing: "border-box",
        }}
      >
        {/* BRAND */}

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: 2 }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "10px",
              display: "grid",
              placeItems: "center",
              background: "#111827",
              color: "#fff",
            }}
          >
            <AutoAwesomeRoundedIcon fontSize="small" />
          </Box>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "1rem",
              color: "#111827",
            }}
          >
            BuyWise
          </Typography>

          <Chip
            label="BETA"
            size="small"
            sx={{
              height: 19,
              fontSize: "0.58rem",
              fontWeight: 700,
            }}
          />
        </Stack>

        {/* SEARCH */}

        {searchQuery && (
          <Paper
            elevation={0}
            sx={{
              mb: 1.5,
              px: 1.5,
              py: 1.2,
              borderRadius: "14px",
              background: "#eef2ff",
              border: "1px solid #e0e7ff",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.62rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#6366f1",
                mb: 0.3,
              }}
            >
              Your search
            </Typography>

            <Typography
              sx={{
                fontSize: "0.86rem",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              {searchQuery}
            </Typography>
          </Paper>
        )}

        {/* HERO */}

        <Box
          sx={{
            mb: 2,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Chip
            icon={<TrendingUpRoundedIcon />}
            label="Smarter product decisions"
            size="small"
            sx={{
              mb: 1,
              fontSize: "0.68rem",
              color: "#4f46e5",
              background: "#eef2ff",
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.8rem",
                md: "4rem",
                lg: "4.8rem",
              },
              lineHeight: 1,
              fontWeight: 850,
              letterSpacing: "-0.06em",
              color: "#111827",
            }}
          >
            Stop comparing.
            <br />

            <Box
              component="span"
              sx={{ color: "#6366f1" }}
            >
              Start deciding.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 1,
              maxWidth: "650px",
              mx: {
                xs: "auto",
                md: 0,
              },
              color: "#6b7280",
              fontSize: "0.78rem",
              lineHeight: 1.5,
            }}
          >
            BuyWise uses your search and preferences to find the best match.
          </Typography>
        </Box>

        {/* MAIN CONTENT */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.8fr) minmax(320px, 0.7fr)",
            },
            gap: {
              xs: 1.8,
              md: 2.5,
            },
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE — RECOMMENDATION */}

          <Box>
            {bestLaptop ? (
              <Paper
                elevation={0}
                sx={{
                  mb: 1.8,
                  p: {
                    xs: 1.8,
                    sm: 2.5,
                    md: 3,
                  },
                  borderRadius: "19px",
                  background: "#111827",
                  color: "#fff",
                  boxShadow:
                    "0 14px 35px rgba(17,24,39,0.16)",
                }}
              >
                <Stack spacing={1.6}>
                  {/* BEST MATCH HEADER */}

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Chip
                      label="🏆 BEST MATCH"
                      size="small"
                      sx={{
                        height: 23,
                        fontSize: "0.63rem",
                        fontWeight: 800,
                        background: "#fff",
                        color: "#111827",
                      }}
                    />

                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        sx={{
                          fontSize: "0.58rem",
                          textTransform: "uppercase",
                          color: "#9ca3af",
                        }}
                      >
                        ML Preference Match
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: "1.7rem",
                            md: "2rem",
                          },
                          lineHeight: 1,
                          fontWeight: 900,
                          color: "#a5b4fc",
                        }}
                      >
                        {bestLaptop.buyWiseScore}%
                      </Typography>
                    </Box>
                  </Stack>

                  {/* PRODUCT */}

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.68rem",
                        color: "#9ca3af",
                      }}
                    >
                      {bestLaptop.brand}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1.35rem",
                          md: "1.9rem",
                        },
                        fontWeight: 850,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {bestLaptop.model}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.4,
                        fontSize: "1.1rem",
                        fontWeight: 800,
                      }}
                    >
                      ₹{bestLaptop.price.toLocaleString("en-IN")}
                    </Typography>
                  </Box>

                  {/* SCORES */}

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                      },
                      gap: 1.2,
                    }}
                  >
                    <ScoreBar
                      label="Performance"
                      value={bestLaptop.performance}
                    />

                    <ScoreBar
                      label="Gaming"
                      value={bestLaptop.gaming}
                    />

                    <ScoreBar
                      label="Battery"
                      value={bestLaptop.battery}
                    />

                    <ScoreBar
                      label="Display"
                      value={bestLaptop.display}
                    />

                    <ScoreBar
                      label="Value"
                      value={bestLaptop.value}
                    />
                  </Box>

                  {/* WHY THIS ONE */}

                  <Box
                    sx={{
                      p: 1.2,
                      borderRadius: "12px",
                      background:
                        "rgba(255,255,255,0.07)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.62rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "#a5b4fc",
                        mb: 0.4,
                      }}
                    >
                      Why this one?
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.74rem",
                        lineHeight: 1.5,
                        color: "#d1d5db",
                      }}
                    >
                      {getRecommendationReason(
                        bestLaptop,
                        preferences
                      )}
                    </Typography>
                  </Box>

                  {/* GOOD FOR / TRADE-OFF */}

                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                    }}
                    spacing={1}
                  >
                    <SmallInfoCard
                      title="GOOD FOR"
                      text={bestLaptop.pros[0]}
                      type="good"
                    />

                    <SmallInfoCard
                      title="TRADE-OFF"
                      text={bestLaptop.cons[0]}
                      type="warning"
                    />
                  </Stack>
                </Stack>
              </Paper>
            ) : (
              <Paper
                elevation={0}
                sx={{
                  mb: 1.8,
                  p: 2.2,
                  borderRadius: "18px",
                  textAlign: "center",
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#111827",
                  }}
                >
                  No matching laptops found
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: "0.76rem",
                    color: "#6b7280",
                  }}
                >
                  Try increasing your budget or changing your search.
                </Typography>
              </Paper>
            )}
          </Box>

          {/* RIGHT SIDE — PREFERENCES */}

          <Paper
            elevation={0}
            sx={{
              p: 1.8,
              borderRadius: "18px",
              background: "#fff",
              border: "1px solid #e5e7eb",
              position: {
                md: "sticky",
              },
              top: {
                md: 16,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#111827",
              }}
            >
              What matters most to you?
            </Typography>

            <Typography
              sx={{
                mt: 0.4,
                mb: 1.8,
                fontSize: "0.72rem",
                color: "#6b7280",
              }}
            >
              Adjust the sliders and watch the recommendation change.
            </Typography>

            <PreferenceSlider
              label="Performance"
              value={weights.performance}
              onChange={(value) =>
                updateWeight("performance", value)
              }
            />

            <PreferenceSlider
              label="Gaming"
              value={weights.gaming}
              onChange={(value) =>
                updateWeight("gaming", value)
              }
            />

            <PreferenceSlider
              label="Battery"
              value={weights.battery}
              onChange={(value) =>
                updateWeight("battery", value)
              }
            />

            <PreferenceSlider
              label="Display"
              value={weights.display}
              onChange={(value) =>
                updateWeight("display", value)
              }
            />

            <PreferenceSlider
              label="Portability"
              value={weights.portability}
              onChange={(value) =>
                updateWeight("portability", value)
              }
            />

            <PreferenceSlider
              label="Value"
              value={weights.value}
              onChange={(value) =>
                updateWeight("value", value)
              }
            />
          </Paper>
        </Box>

        {/* FOOTER */}

        <Typography
          sx={{
            mt: 1.8,
            px: 1,
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "0.66rem",
          }}
        >
          BuyWise combines your search, product attributes and preferences
          to personalize the result.
        </Typography>
      </Box>
    </Box>
  );
}

function ScoreBar({ label, value }) {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 0.3 }}
      >
        <Typography
          sx={{
            fontSize: "0.62rem",
            color: "#9ca3af",
          }}
        >
          {label}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.62rem",
            fontWeight: 700,
            color: "#d1d5db",
          }}
        >
          {value}
        </Typography>
      </Stack>

      <Box
        sx={{
          height: 5,
          borderRadius: "999px",
          background: "rgba(255,255,255,0.1)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: `${value}%`,
            height: "100%",
            background:
              "linear-gradient(90deg, #6366f1, #a5b4fc)",
            transition: "width 300ms ease",
          }}
        />
      </Box>
    </Box>
  );
}

function PreferenceSlider({
  label,
  value,
  onChange,
}) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "#374151",
          }}
        >
          {label}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.68rem",
            fontWeight: 700,
            color: "#6366f1",
          }}
        >
          {value}%
        </Typography>
      </Stack>

      <Box
        component="input"
        type="range"
        min="0"
        max="50"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        sx={{
          width: "100%",
          height: 5,
          mt: 0.5,
          accentColor: "#6366f1",
          cursor: "pointer",
        }}
      />
    </Box>
  );
}

function SmallInfoCard({
  title,
  text,
  type,
}) {
  const color =
    type === "good"
      ? "#86efac"
      : "#fdba74";

  return (
    <Box
      sx={{
        flex: 1,
        p: 1.1,
        borderRadius: "11px",
        background: "rgba(255,255,255,0.05)",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.58rem",
          fontWeight: 800,
          color,
          mb: 0.3,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.7rem",
          lineHeight: 1.4,
          color: "#d1d5db",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function getRecommendationReason(
  laptop,
  preferences
) {
  if (preferences.gaming) {
    return `${laptop.model} matches your gaming search well because it combines strong gaming performance with good value within your budget.`;
  }

  if (preferences.battery) {
    return `${laptop.model} is a strong match because battery life has a higher priority in your search.`;
  }

  if (preferences.college) {
    return `${laptop.model} fits a college-focused search by balancing portability, battery life and overall value.`;
  }

  if (preferences.programming) {
    return `${laptop.model} is a strong match for programming because of its performance and overall balance.`;
  }

  return `${laptop.model} has the strongest overall preference match for the current search.`;
}

export default NewComponent;