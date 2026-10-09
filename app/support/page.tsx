"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import {
  FaPaypal,
  FaCoffee,
  FaGithub,
  FaCopy,
  FaCheck,
  FaQrcode,
  FaChevronDown,
} from "react-icons/fa";
import { SiTether, SiSolana, SiLitecoin, SiBitcoin } from "react-icons/si";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const QUICK_SUPPORT = [
  {
    label: "GitHub Sponsors",
    url: "https://github.com/sponsors/Adarshhic",
    icon: <FaGithub />,
    subtext: "Recurring support on GitHub",
  },
  {
    label: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/adarsh",
    icon: <FaCoffee />,
    subtext: "Fuel my late-night builds",
  },
  {
    label: "PayPal",
    url: "https://paypal.me/adarsh",
    icon: <FaPaypal />,
    subtext: "One-time gift via PayPal",
  },
];

const UPI_ID = "adarsh.mishra@upi";

interface CryptoCoin {
  key: string;
  label: string;
  icon: React.ReactNode;
  networks?: string[];
  addresses?: Record<string, { badge: string; address: string }>;
  badge?: string;
  address?: string;
}

const CRYPTO_COINS: CryptoCoin[] = [
  {
    key: "USDT",
    label: "USDT",
    icon: <SiTether style={{ color: "#26A17B" }} />,
    networks: ["AVAX C-Chain", "Polygon", "TRC20", "SOL", "BEP20"],
    addresses: {
      "AVAX C-Chain": {
        badge: "AVAX C-Chain",
        address: "0xf4934684d9C5f3D6ec634B5089b000694E6FaB93",
      },
      Polygon: {
        badge: "Polygon",
        address: "0xf4934684d9C5f3D6ec634B5089b000694E6FaB93",
      },
      TRC20: {
        badge: "TRC-20",
        address: "TYGQJk85Qhm818RGZtJV8CpMvqeK2JT8Vt",
      },
      SOL: {
        badge: "SOL",
        address: "6u1N5igxZexWJFx2GcrGuJhmhPC1uftq5cPFd1asuEH6",
      },
      BEP20: {
        badge: "BEP-20",
        address: "0xf4934684d9C5f3D6ec634B5089b000694E6FaB93",
      },
    },
  },
  {
    key: "USDC",
    label: "USDC",
    icon: <MdOutlineCurrencyExchange style={{ color: "#2775CA" }} />,
    networks: ["BEP20", "SOL", "AVAX C-Chain", "Polygon"],
    addresses: {
      BEP20: {
        badge: "BEP-20",
        address: "0xf4934684d9C5f3D6ec634B5089b000694E6FaB93",
      },
      SOL: {
        badge: "SOL",
        address: "6u1N5igxZexWJFx2GcrGuJhmhPC1uftq5cPFd1asuEH6",
      },
      "AVAX C-Chain": {
        badge: "AVAX C-Chain",
        address: "0xf4934684d9C5f3D6ec634B5089b000694E6FaB93",
      },
      Polygon: {
        badge: "Polygon",
        address: "0xf4934684d9C5f3D6ec634B5089b000694E6FaB93",
      },
    },
  },
  {
    key: "SOL",
    label: "SOL",
    icon: <SiSolana style={{ color: "#14F195" }} />,
    badge: "SOL",
    address: "6u1N5igxZexWJFx2GcrGuJhmhPC1uftq5cPFd1asuEH6",
  },
  {
    key: "LTC",
    label: "LTC",
    icon: <SiLitecoin style={{ color: "#345D9D" }} />,
    badge: "LTC",
    address: "ltc1qlvtnllrvcczzuwhng0nhdpuu8hktnu6t8pf093",
  },
  {
    key: "BTC",
    label: "BTC",
    icon: <SiBitcoin style={{ color: "#F7931A" }} />,
    badge: "BTC",
    address: "bc1qlvtnllrvcczzuwhng0nhdpuu8hktnu6trantap",
  },
];

function CopyButton({
  text,
  label,
  showStatusText = false,
}: {
  text: string;
  label: string;
  showStatusText?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        type="button"
        className={`support-copy-btn ${copied ? "support-copy-btn-copied" : ""}`}
        onClick={handleCopy}
        aria-label={copied ? `${label} copied` : `Copy ${label}`}
      >
        {copied ? <FaCheck /> : <FaCopy />}
      </button>
      {showStatusText && copied && (
        <span className="support-copy-status" role="status">
          Copied
        </span>
      )}
    </>
  );
}

function QuickCopyButton({ url, label }: { url: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      className={`support-quick-copy ${copied ? "support-quick-copy-copied" : ""}`}
      onClick={handleCopy}
      aria-label={copied ? `${label} link copied` : `Copy ${label} link`}
      title={copied ? "Link copied" : "Copy link"}
    >
      {copied ? <FaCheck /> : <FaCopy />}
    </button>
  );
}

export default function SupportPage() {
  const [selectedCoinKey, setSelectedCoinKey] = useState("USDT");
  const [selectedNetwork, setSelectedNetwork] = useState("AVAX C-Chain");
  const [showQr, setShowQr] = useState(false);

  const [coinOpen, setCoinOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);

  const selectedCoin =
    CRYPTO_COINS.find((c) => c.key === selectedCoinKey) || CRYPTO_COINS[0];

  const currentAddressData = selectedCoin.networks
    ? selectedCoin.addresses?.[selectedNetwork]
    : { badge: selectedCoin.badge || selectedCoin.label, address: selectedCoin.address || "" };

  const address = currentAddressData?.address || "";
  const badge = currentAddressData?.badge || "";

  return (
    <div className="support-layout">
      <div className="support-container standard-container">
        <SectionTitle>/support</SectionTitle>
        <p className="support-description">
          If my work has helped you, here&apos;s how to support it.
        </p>

        {/* Quick Support */}
        <section className="support-section">
          <h3 className="support-section-title">Quick Support</h3>
          <p className="support-section-desc">
            Three fast platforms for one-time support.
          </p>

          <div className="support-quick-grid">
            {QUICK_SUPPORT.map((item) => (
              <div key={item.label} className="support-quick-card-wrap">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="support-quick-card"
                >
                  <span className="support-quick-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="support-quick-label">{item.label}</span>
                  <span className="support-quick-subtext">{item.subtext}</span>
                </a>
                <QuickCopyButton url={item.url} label={item.label} />
              </div>
            ))}
          </div>
        </section>

        {/* UPI India */}
        <section className="support-section">
          <h3 className="support-section-title">UPI (India)</h3>
          <p className="support-section-desc">
            Instant transfers for supporters in India.
          </p>

          <div className="support-upi-row">
            <span className="support-upi-icon" aria-hidden="true">
              <MdOutlineCurrencyExchange />
            </span>
            <span className="support-upi-id" title={UPI_ID}>
              {UPI_ID}
            </span>
            <CopyButton text={UPI_ID} label="UPI ID" showStatusText />
          </div>
        </section>

        {/* Crypto */}
        <section className="support-section">
          <h3 className="support-section-title">Crypto</h3>
          <p className="support-section-desc">
            Direct wallet transfers &mdash; pick a coin, then its network.
          </p>

          <div>
            <div
              className={`support-select-row ${
                selectedCoin.networks ? "support-select-row-networks" : ""
              }`}
            >
              {/* Coin Select */}
              <div className="support-select">
                <span className="support-select-label">Coin</span>
                <button
                  type="button"
                  className="support-select-trigger"
                  aria-expanded={coinOpen}
                  onClick={() => setCoinOpen((v) => !v)}
                >
                  <span className="support-select-trigger-icon" aria-hidden="true">
                    {selectedCoin.icon}
                  </span>
                  <span>{selectedCoin.label}</span>
                  <FaChevronDown className="support-select-chevron" />
                </button>

                {coinOpen && (
                  <ul className="support-select-listbox" role="listbox">
                    {CRYPTO_COINS.map((c) => (
                      <li
                        key={c.key}
                        role="option"
                        aria-selected={c.key === selectedCoinKey}
                        className={`support-select-option ${
                          c.key === selectedCoinKey ? "support-select-option-selected" : ""
                        }`}
                        onClick={() => {
                          setSelectedCoinKey(c.key);
                          if (c.networks) {
                            setSelectedNetwork(c.networks[0]);
                          }
                          setCoinOpen(false);
                        }}
                      >
                        <span className="support-select-option-icon">{c.icon}</span>
                        <span>{c.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Network Select if available */}
              {selectedCoin.networks && (
                <div className="support-select">
                  <span className="support-select-label">Network</span>
                  <button
                    type="button"
                    className="support-select-trigger"
                    aria-expanded={networkOpen}
                    onClick={() => setNetworkOpen((v) => !v)}
                  >
                    <span>{selectedNetwork}</span>
                    <FaChevronDown className="support-select-chevron" />
                  </button>

                  {networkOpen && (
                    <ul className="support-select-listbox" role="listbox">
                      {selectedCoin.networks.map((net) => (
                        <li
                          key={net}
                          role="option"
                          aria-selected={net === selectedNetwork}
                          className={`support-select-option ${
                            net === selectedNetwork ? "support-select-option-selected" : ""
                          }`}
                          onClick={() => {
                            setSelectedNetwork(net);
                            setNetworkOpen(false);
                          }}
                        >
                          <span>{net}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Address Box */}
            <div className="support-address-box">
              <div className="support-address-row">
                <span className="support-badge">{badge}</span>
                <span className="support-address" title={address}>
                  {address}
                </span>
                <CopyButton text={address} label="wallet address" showStatusText />
              </div>

              <div className="support-address-actions">
                <button
                  type="button"
                  className="support-text-btn"
                  onClick={() => setShowQr((v) => !v)}
                >
                  <FaQrcode aria-hidden="true" />
                  <span>{showQr ? "Hide QR" : "Show QR"}</span>
                </button>
              </div>

              {showQr && address && (
                <div
                  className="support-qr"
                  role="img"
                  aria-label={`QR code for ${selectedCoin.label} wallet address on ${badge}`}
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=168x168&data=${encodeURIComponent(
                      address
                    )}`}
                    alt="QR Code"
                    width={168}
                    height={168}
                  />
                </div>
              )}
            </div>

            <p className="support-crypto-note">
              Double-check the network before sending &mdash; sending on the wrong
              network may result in loss of funds.
            </p>
          </div>
        </section>

        <div className="view-all-projects">
          <Link href="/" className="view-all-btn" aria-label="back to home">
            <FiArrowLeft className="arrow-icon" />
            <span>Back to Home</span>
          </Link>
          <Link href="/projects" className="view-all-btn" aria-label="View Projects">
            <span>View Projects</span>
            <FiArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
