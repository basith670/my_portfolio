const research = [
    {
      id: 1,
  
      title:
        "Uncertainty-Aware SegFormer for Satellite Image Segmentation Using Evidential Deep Learning",
  
      type: "Conference Paper",
  
      conference:
        "Second International Conference on Innovations in Engineering & Technology (ICIET-2026)",
  
      organizer:
        "Ilahia College of Engineering & Technology",
  
      location: "Muvattupuzha, Kerala, India",
  
      date: "August 20–21, 2026",
  
      authors:
        "Shiju Kumar P S, Hrishikesh S Raj, Muhammad Basith K",
  
      description:
        "Presented an uncertainty-aware semantic segmentation framework that integrates Evidential Deep Learning (EDL) with the SegFormer MiT-b3 architecture to estimate epistemic uncertainty in satellite image segmentation through a single forward pass.",
  
      highlights: [
        "Achieved 65.81% mIoU on the DeepGlobe Land Cover dataset.",
        "Integrated Evidential Deep Learning with a hierarchical SegFormer architecture.",
        "Achieved stronger uncertainty-error localization with ρ = 0.506.",
        "Compared single-pass EDL against MC Dropout for accuracy, calibration, uncertainty, and inference efficiency.",
        "Evaluated out-of-distribution detection using synthetic image corruptions.",
      ],
  
      technologies: [
        "Python",
        "PyTorch",
        "SegFormer",
        "Vision Transformers",
        "Evidential Deep Learning",
        "Semantic Segmentation",
        "Remote Sensing",
        "Uncertainty Quantification",
      ],
  
      metrics: [
        {
          value: "65.81%",
          label: "mIoU",
        },
        {
          value: "0.506",
          label: "Uncertainty–Error ρ",
        },
        {
          value: "12.9s",
          label: "EDL Inference Time",
        },
        {
          value: "0.686",
          label: "OOD Spearman ρ",
        },
      ],
  
      paper: "/research/uncertainty-aware-segformer-paper.pdf",
  
      certificate:
        "/certificates/iciet-2026-presentation-certificate.pdf",
  
      participationCertificate:
        "/certificates/iciet-2026-participation-certificate.PNG",
    },
  ];
  
  export default research;