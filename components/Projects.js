import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const ProjectCard = ({ project, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'In Development':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Coming Soon':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCardColor = (color) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
      green: 'from-green-50 to-green-100 border-green-200 hover:border-green-400',
      purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400',
      gray: 'from-gray-50 to-gray-100 border-gray-300'
    };
    return colors[color] || colors.blue;
  };

  const isComingSoon = project.status === 'Coming Soon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={!isComingSoon ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={`bg-gradient-to-br ${getCardColor(project.color)} border-2 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
        isComingSoon ? 'opacity-75' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">{project.icon}</span>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              {project.title}
            </h3>
            <span className="text-sm text-gray-600 font-medium">
              {project.category}
            </span>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
            project.status
          )}`}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Impact Section */}
      {project.impact && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Impact:</h4>
          <ul className="space-y-2">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 mt-0.5" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics */}
      {project.metrics && (
        <div className="grid grid-cols-3 gap-3 mb-4 p-4 bg-white/50 rounded-lg">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg sm:text-xl font-bold text-blue-600">
                {value}
              </div>
              <div className="text-xs text-gray-600 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Technologies */}
      {project.technologies && (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/70 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className={`${LAYOUT.SECTION_PADDING} bg-gray-50`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bridging pharmacy and technology to create meaningful healthcare solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Interested in collaborating or learning more about these projects?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span aria-hidden="true">💬</span>
              Connect with Me!
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;