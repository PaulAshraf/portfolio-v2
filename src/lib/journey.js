// Plan for the Engineer -> AI Researcher journey, shown on /journey.
// Source of truth is AGENTS.md in the engineertoairesearcher repo. Update this
// file when the plan changes or a checkpoint is reviewed.

export const goal = {
  by: 'End of 2027',
  text: 'An offer for a paid technical AI safety role: research engineer, research scientist, or member of technical staff, at any serious organization.',
}

// status: 'upcoming' | 'active' | 'done' | 'missed'
export const checkpoints = [
  {
    date: '2027-02-15',
    status: 'active',
    items: [
      'A transformer built and trained from scratch',
      'One published replication of a safety result',
      'A research direction chosen',
    ],
  },
  {
    date: '2027-05-15',
    status: 'upcoming',
    items: [
      'One original result, written up publicly',
      'Feedback from at least one working safety researcher',
      'Fellowship and job applications started',
    ],
  },
  {
    date: '2027-08-15',
    status: 'upcoming',
    items: [
      'A second project, ideally with a mentor or collaborator',
      'Applications in progress at several organizations',
    ],
  },
  {
    date: '2027-11-15',
    status: 'upcoming',
    items: [
      'An offer, a funded fellowship, or a written decision on what changes',
    ],
  },
]

export const learning = [
  {
    title: 'ML at implementation depth',
    description:
      'Building and training transformers from scratch, reading model internals, and debugging failures that raise no error.',
  },
  {
    title: 'Experimental rigor',
    description:
      'Baselines, controls, ablations, multiple seeds. Moving from "does it work" to "is it true, and what else would explain it".',
  },
  {
    title: 'Research taste',
    description:
      'Choosing questions worth answering, and the smallest experiment that would change my mind.',
  },
  {
    title: 'The safety landscape',
    description:
      'Threat models and the main agendas: interpretability, evaluations, control, and oversight.',
  },
]

export const rules = [
  'Every experiment starts with a written question and a prediction.',
  'Null and negative results get written up like positive ones.',
  'Results first. Opinions about the field wait until there is work behind them.',
]
