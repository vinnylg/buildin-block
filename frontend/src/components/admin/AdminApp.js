import React, { useState } from 'react'
import styled from 'styled-components'

import AdminBar from './AdminBar'
import AdminSide from './AdminSide'

function AdminApp(){
  const [ leftSide, setLeftSide ] = useState(true)
  const [ workspace, setWorkspace ] = useState(true)
  const [ workspaceSize, setWorkspaceSize ] = useState({height: 'auto', width: 'auto'})

  const handleLeftSide = () => setLeftSide(!leftSide)
  const handleWorkspace = () => setWorkspace(!workspace)

  const AdminApp = styled.div `
    position: relative;
  `

  const WorkGrid = styled.div `
    margin-left: ${leftSide?'250px':'0'};
    height: 100%;
    width: auto;
    position: fixed;
    z-index: 0;
    background-color: #A0A0A0;
    overflow: scroll;
    padding: 50px;
  `

  const Workspace = styled.div `
    position: relative;
    height: ${workspaceSize.height};
    width: ${workspaceSize.width};
    border: 5px solid blue;
    background-color: #f0f0f0;
  `

  return (
    <AdminApp>
      <AdminBar openLeftSide={handleLeftSide} openWorkspace={handleWorkspace}/>
      <AdminSide open={leftSide}/>
      <WorkGrid>
      { workspace &&
          <Workspace>
          <h1>Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi.</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit; <a href="http://loripsum.net/" target="_blank">A mene tu?</a> Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit? Quis istum dolorem timet? <i>Duo Reges: constructio interrete.</i> Primum cur ista res digna odio est, nisi quod est turpis? Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Equidem, sed audistine modo de Carneade? Quae diligentissime contra Aristonem dicuntur a Chryippo. Erat enim Polemonis. <a href="http://loripsum.net/" target="_blank">Non semper, inquam;</a> </p>

          <blockquote cite="http://loripsum.net">
          	Qui autem ita frui volunt voluptatibus, ut nulli propter eas consequantur dolores, et qui suum iudicium retinent, ne voluptate victi faciant id, quod sentiant non esse faciendum, ii voluptatem maximam adipiscuntur praetermittenda voluptate.
          </blockquote>


          <ol>
          	<li>Haec para/doca illi, nos admirabilia dicamus.</li>
          	<li>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus;</li>
          	<li>Partim cursu et peragratione laetantur, congregatione aliae coetum quodam modo civitatis imitantur;</li>
          	<li>Aut, Pylades cum sis, dices te esse Orestem, ut moriare pro amico?</li>
          	<li>Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio.</li>
          </ol>


          <dl>
          	<dt><dfn>Sed videbimus.</dfn></dt>
          	<dd>Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare;</dd>
          	<dt><dfn>Quis enim redargueret?</dfn></dt>
          	<dd>Homines optimi non intellegunt totam rationem everti, si ita res se habeat.</dd>
          </dl>


          <p>Hoc non est positum in nostra actione. <a href="http://loripsum.net/" target="_blank">Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris.</a> Facile est hoc cernere in primis puerorum aetatulis. An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar? Bona autem corporis huic sunt, quod posterius posui, similiora. </p>

          <p>At ille pellit, qui permulcet sensum voluptate. Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia. Et quidem, inquit, vehementer errat; Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. An vero, inquit, quisquam potest probare, quod perceptfum, quod. <a href="http://loripsum.net/" target="_blank">Quonam, inquit, modo?</a> </p>

          <p>Sic enim censent, oportunitatis esse beate vivere. Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Conferam tecum, quam cuique verso rem subicias; Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Vide, quantum, inquam, fallare, Torquate. Quid est, quod ab ea absolvi et perfici debeat? <a href="http://loripsum.net/" target="_blank">An nisi populari fama?</a> Paulum, cum regem Persem captum adduceret, eodem flumine invectio? </p>

          <ul>
          	<li>Hoc est dicere: Non reprehenderem asotos, si non essent asoti.</li>
          	<li>Sic enim maiores nostri labores non fugiendos tristissimo tamen verbo aerumnas etiam in deo nominaverunt.</li>
          </ul>


          <p>Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. <i>Nulla erit controversia.</i> Velut ego nunc moveor. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? <b>Illa tamen simplicia, vestra versuta.</b> At multis malis affectus. Sic enim censent, oportunitatis esse beate vivere. </p>

          </Workspace>
      }
      </WorkGrid>
    </AdminApp>
  )
}

export default AdminApp
