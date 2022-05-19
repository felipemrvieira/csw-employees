import axios from 'axios'
import api from '../services/api'

export const fetchProjects = async () => {
  try {
    return await axios.get('http://localhost:3004/projects')
  } catch (error) {
    return error
  }
}

export const postProject = async (project) => {
  try {
    return await axios.post('localhost:3004/projects')
  } catch (error) {
    return []
  }
}

// export const fetchProjects = async () => {
//   try {
//     return await api.get('/projects')
//   } catch (error) {
//     return [
//       { id: 1, name: 'Project Xxx', employees: [] },
//       { id: 2, name: 'Project Yyy', employees: [] },
//     ]
//   }
// }

// export const postProject = async (project) => {
//   try {
//     return await api.post('/projects')
//   } catch (error) {
//     return []
//   }
// }
