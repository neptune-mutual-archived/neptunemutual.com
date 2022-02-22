import { Trans, Select } from "@lingui/macro";

const BinodImage = "/images/team/Binod.png";
const EdwardImage = "/images/team/Edward.png";
const GillianImage = "/images/team/Gillian.png";
const SuprithaImage = "/images/team/Supritha.png";
const GilbertImage = "/images/team/Gilbert.png";
const FlashburstImage = "/images/team/Flashburst.png";
const HansImage = "/images/team/Hans.png";
const MarkImage = "/images/team/Mark.png";
const HanzImage = "/images/team/Hanz.png";
const PaulImage = "/images/team/Paul.png";
const SavinImage = "/images/team/Savin.png";
const PukarImage = "/images/team/Pukar.png";
const BinitaImage = "/images/team/Binita.png";
const JonalynImage = "/images/team/Jonalyn.png";
const VaishnaviImage = "/images/team/Vaishnavi.png";
const FreemindImage = "/images/team/Freemind.png";
const BrandoImage = "/images/team/Brando.png";
const RudolfImage = "/images/team/Rudolf.png";
const HenryImage = "/images/team/Henry.png";
const EmmanuelImage = "/images/team/Emmanuel.png";
const OnYavinImage = "/images/team/On Yavin.png";
const RupakImage = "/images/team/Rupak.png";

export const teamMembers = [
  {
    imageSrc: BinodImage,
    nameInvariant: "Binod Nirvan",
    name: <Trans>Binod Nirvan</Trans>,
    title: <Trans>CEO & Founder</Trans>,
    links: {
      linkedIn: "https://linkedin.com/in/binodnirvan",
      twitter: "https://twitter.com/npmbinod",
      medium: "https://medium.com/@heyhibi",
    },
  },
  {
    imageSrc: GillianImage,
    nameInvariant: "Gillian Wu",
    name: <Trans>Gillian Wu</Trans>,
    title: <Select value="female" male="Co-Founder" female="Co-Founder" />,
    links: {
      linkedIn: "https://linkedin.com/in/gillian",
    },
  },
  {
    imageSrc: GilbertImage,
    nameInvariant: "Gilbert NG",
    name: <Trans>Gilbert NG</Trans>,
    title: <Trans>Chief Legal Officer</Trans>,
    links: {
      linkedIn: "https://www.linkedin.com/in/gilbert-ng-826091a1/",
      twitter: "https://twitter.com/gilbertmhng/",
    },
  },
  {
    imageSrc: SuprithaImage,
    nameInvariant: "Supritha Shanmugam",
    name: <Trans>Supritha Shanmugam</Trans>,
    title: <Trans>People Manager</Trans>,
    links: {
      linkedIn: "https://linkedin.com/in/supritha-shanmugam-8974061b4",
      twitter: "https://twitter.com/suprithashan",
    },
  },
  {
    imageSrc: FlashburstImage,
    nameInvariant: "Flashburst",
    name: <Trans>Flashburst</Trans>,
    title: <Trans>Blockchain Engineer</Trans>,
    links: {},
  },
  {
    imageSrc: HansImage,
    nameInvariant: "Hans Koning",
    name: <Trans>Hans Koning</Trans>,
    title: <Trans>Blockchain Advisor</Trans>,
    links: {},
  },
  {
    imageSrc: OnYavinImage,
    nameInvariant: "On Yavin",
    name: <Trans>On Yavin</Trans>,
    title: <Trans>Blockchain Advisor</Trans>,
    links: {},
  },
  {
    imageSrc: MarkImage,
    nameInvariant: "Mark Garcia",
    name: <Trans>Mark Garcia</Trans>,
    title: <Trans>Design Lead</Trans>,
    links: {
      linkedIn: "https://linkedin.com/in/mark-garcia-541523179",
    },
  },
  {
    imageSrc: HanzImage,
    nameInvariant: "Hanz Cabilao",
    name: <Trans>Hanz Cabilao</Trans>,
    title: <Trans>Content Strategist</Trans>,
    links: {
      linkedIn: "https://linkedin.com/in/hanz-cabilao",
      twitter: "https://www.twitter.com/ha_de_z",
    },
  },
  {
    imageSrc: EmmanuelImage,
    nameInvariant: "Emmanuel Rogel",
    name: <Trans>Emmanuel Rogel</Trans>,
    title: <Trans>Social Strategist</Trans>,
    links: {
      linkedIn: "https://www.linkedin.com/in/emmanuel-rogel-994292135/",
      twitter: "https://twitter.com/cryptodakku",
    },
  },
  {
    imageSrc: PaulImage,
    nameInvariant: "Paul Steven Cue",
    name: <Trans>Paul Steven Cue</Trans>,
    title: <Trans>Senior Graphic Designer</Trans>,
    links: {
      facebook: "https://www.facebook.com/paul.cue/",
      linkedIn: "https://www.linkedin.com/in/paul-steven-cue-680035a5/",
    },
  },
  {
    imageSrc: SavinImage,
    nameInvariant: "Savin Bhandari",
    name: <Trans>Savin Bhandari</Trans>,
    title: <Trans>Frontend Engineer</Trans>,
    links: {
      facebook: "https://www.facebook.com/sansiven",
      linkedIn: "https://www.linkedin.com/in/sansiven/",
      twitter: "https://twitter.com/sansiven",
    },
  },
  {
    imageSrc: RupakImage,
    name: <Trans>Rupak Acharya</Trans>,
    nameInvariant: "Rupak Acharya",
    title: <Trans>Frontend Engineer</Trans>,
    links: {
      linkedIn: "https://www.linkedin.com/in/acharyarupak391",
      twitter: "https://twitter.com/acharyarupak391",
    },
  },
  {
    imageSrc: BrandoImage,
    nameInvariant: "Brando",
    name: <Trans>Brando</Trans>,
    title: <Trans>Growth</Trans>,
    links: {},
  },
  {
    imageSrc: PukarImage,
    nameInvariant: "Pukar Acharya",
    name: <Trans>Pukar Acharya</Trans>,
    title: <Trans>Research Analyst</Trans>,
    links: {
      linkedIn: "https://www.linkedin.com/in/iampukar/",
      twitter: "https://twitter.com/PukarAcharya_",
    },
  },
  {
    imageSrc: BinitaImage,
    nameInvariant: "Binita Thapa",
    name: <Trans>Binita Thapa</Trans>,
    title: <Trans>Finance Analyst</Trans>,
    links: {
      linkedIn: "https://www.linkedin.com/in/binitathapa",
      twitter: "https://twitter.com/CABinitaThapa",
    },
  },
  {
    imageSrc: JonalynImage,
    nameInvariant: "Jonalyn Delos Santos",
    name: <Trans>Jonalyn Delos Santos</Trans>,
    title: <Trans>Technical Recruiter</Trans>,
    links: {
      facebook: "https://www.facebook.com/cj.sotnas.397/",
      linkedIn: "https://www.linkedin.com/in/jonalyn-delos-santos-324a3b80/",
      twitter: "https://twitter.com/JonalynNP",
    },
  },
  {
    imageSrc: VaishnaviImage,
    nameInvariant: "Vaishnavi Sahu",
    name: <Trans>Vaishnavi Sahu</Trans>,
    title: <Trans>Graphics Designer</Trans>,
    links: {
      linkedIn: "https://www.linkedin.com/in/vaishnavi-sahu/",
      twitter: "https://twitter.com/vaish_2297",
    },
  },
  {
    imageSrc: FreemindImage,
    nameInvariant: "Freemind",
    name: <Trans>Freemind</Trans>,
    title: <Trans>Community</Trans>,
    links: {},
  },
  {
    imageSrc: RudolfImage,
    nameInvariant: "Rudolf",
    name: <Trans>Rudolf</Trans>,
    title: <Trans>Blockchain Engineer</Trans>,
    links: {},
  },
  {
    imageSrc: HenryImage,
    nameInvariant: "Henry Law",
    name: <Trans>Henry Law</Trans>,
    title: <Trans>Community Ninja</Trans>,
    links: {},
  },
  {
    imageSrc: EdwardImage,
    nameInvariant: "Edward Ryall",
    name: <Trans>Edward Ryall</Trans>,
    title: <Trans>Co-Founder</Trans>,
    links: {
      linkedIn: "https://www.linkedin.com/in/ryall/",
      twitter: "https://twitter.com/edward_ryall",
      facebook: "https://www.facebook.com/edward.ryall",
    },
  },
];
