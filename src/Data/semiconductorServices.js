import serviceDesign from "../assets/images/icons/service-design.svg";
import serviceHosting from "../assets/images/icons/service-hosting.svg";
import serviceSocial from "../assets/images/icons/service-social.svg";
import serviceSeo from "../assets/images/icons/service-seo.svg";
import serviceCloud from "../assets/images/icons/service-cloud.svg";
import serviceSecure from "../assets/images/icons/service-secure.svg";

const semiconductorServices = [
  {
    title: "RTL-to-GDSII Implementation",
    description:
      "Full-flow physical implementation from RTL synthesis to final GDSII signoff.",
    icon: serviceDesign,
    link: "/RTL_to_GDSII",
  },
  {
    title: "AI-Augmented SoC Verification",
    description:
      "Intelligent verification cycles from RTL compliance to coverage signoff.",
    icon: serviceHosting,
    link: "/ai-verification",
  },
  {
    title: "Pre-Silicon Firmware & Co-Design",
    description:
      "Hardware-Software Co-Design and pre-silicon validation.",
    icon: serviceSocial,
    link: "/pre-silicon",
  },
  {
    title: "Domain-Specific AI Architecture (RISC-V + NPU)",
    description:
      "Custom RISC-V ISA integration with neural acceleration.",
    icon: serviceSeo,
    link: "/riscv-npu",
  },
  {
    title: "Emulation-Based System Validation",
    description:
      "High-fidelity hardware emulation for full-system stress testing.",
    icon: serviceCloud,
    link: "/emulation-validation",
  },
  {
    title: "FPGA-to-ASIC Migration & Prototyping",
    description:
      "Transitioning prototypes to production-ready silicon.",
    icon: serviceSecure,
    link: "/fpga-asic",
  },
  {
    title: "UCIe & Chiplet Interconnect Solutions",
    description:
      "Modular SoC architectures via Die-to-Die interfaces.",
    icon: serviceSecure,
    link: "/chiplet-interconnect",
  },
];

export default semiconductorServices;