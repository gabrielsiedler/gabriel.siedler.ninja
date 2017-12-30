import React from 'react';
import Head from 'next/head';

import { Presentation } from '../../components/Presentation';
import { Content } from '../../components/Content';
import { FlexContainer } from '../../components/Common';

const Home = () => (
  <FlexContainer>
    <Head>
      <title>Gabriel Siedler - test</title>
      <meta type="description" content="this is a meta test" />
    </Head>
    <Presentation
      title="Gabriel Siedler"
      subtitle="Full Stack Web Developer"
      backgroundImage="/static/images/me.png"
      maskColor="rgba(25,65,86,0.7)"
    />
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus sapien nec lorem
      auctor, eu bibendum ligula consequat. In auctor id felis quis feugiat. Donec at felis in
      libero vehicula suscipit. Praesent sollicitudin libero ligula, non hendrerit odio vulputate
      vehicula. Proin at eros sit amet turpis dapibus sodales ac sed nunc. Interdum et malesuada
      fames ac ante ipsum primis in faucibus. Phasellus auctor lobortis lectus a auctor. Suspendisse
      potenti. Maecenas convallis, erat vel aliquet cursus, nisi dui pretium lectus, ac iaculis
      massa ipsum sit amet orci. Proin aliquam faucibus ipsum eu rhoncus. Nulla non faucibus ex.
      Aenean odio leo, lacinia quis nunc vel, scelerisque egestas leo. Ut auctor dui eget tellus
      maximus dapibus. Suspendisse est turpis, cursus laoreet lectus at, tempor porta ex. Mauris
      lacinia tortor ut lacus fermentum, in dapibus sem ultrices. Donec interdum purus ac elit
      posuere ornare. Nulla sodales, sem et cursus malesuada, dolor dolor sodales lorem, non rhoncus
      justo lectus eu magna. Phasellus eget cursus purus, ut suscipit neque. Suspendisse mattis
      luctus dapibus. Nulla sollicitudin mi massa, ut tempor neque pharetra ut. Phasellus pharetra
      purus tortor, vitae tristique nunc accumsan sit amet. Pellentesque feugiat porttitor massa.
      Vestibulum at magna aliquet, ultricies justo at, fringilla dolor. Nullam eu bibendum nulla.
      Maecenas tristique rutrum luctus. Vestibulum in augue felis. Nullam pharetra, ante sit amet
      fermentum facilisis, sapien velit venenatis diam, a imperdiet odio enim ut enim. Sed in sem
      vitae risus euismod commodo sed ac mi. Sed mi lorem, placerat ac libero eu, hendrerit
      vulputate tellus. Suspendisse sit amet porttitor massa, eu interdum elit. Proin rutrum at diam
      quis vulputate. Morbi gravida ante magna, non molestie quam vehicula ut. Sed erat dui, maximus
      id nisl nec, volutpat condimentum turpis. Pellentesque vel elementum felis, eu porttitor
      risus. Nulla facilisi. Nullam porta nulla odio, eget dignissim leo aliquet at. Maecenas
      sodales sodales tortor, in sodales ante. Quisque sit amet arcu massa. Sed ullamcorper
      imperdiet eleifend. Quisque porta lorem non sapien accumsan, quis tincidunt augue facilisis.
      Praesent pellentesque arcu nec mauris ornare, eu rutrum quam semper. Mauris vulputate dapibus
      tellus, a feugiat tellus condimentum eget. Maecenas nisi lectus, tincidunt eu vehicula
      lacinia, iaculis a ex. Ut eget arcu sit amet mauris bibendum eleifend. Quisque volutpat sem ac
      varius facilisis. Quisque orci ipsum, aliquet a bibendum laoreet, laoreet a metus. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus sapien nec lorem auctor, eu
      bibendum ligula consequat. In auctor id felis quis feugiat. Donec at felis in libero vehicula
      suscipit. Praesent sollicitudin libero ligula, non hendrerit odio vulputate vehicula. Proin at
      eros sit amet turpis dapibus sodales ac sed nunc. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Phasellus auctor lobortis lectus a auctor. Suspendisse potenti. Maecenas
      convallis, erat vel aliquet cursus, nisi dui pretium lectus, ac iaculis massa ipsum sit amet
      orci. Proin aliquam faucibus ipsum eu rhoncus. Nulla non faucibus ex. Aenean odio leo, lacinia
      quis nunc vel, scelerisque egestas leo. Ut auctor dui eget tellus maximus dapibus. Suspendisse
      est turpis, cursus laoreet lectus at, tempor porta ex. Mauris lacinia tortor ut lacus
      fermentum, in dapibus sem ultrices. Donec interdum purus ac elit posuere ornare. Nulla
      sodales, sem et cursus malesuada, dolor dolor sodales lorem, non rhoncus justo lectus eu
      magna. Phasellus eget cursus purus, ut suscipit neque. Suspendisse mattis luctus dapibus.
      Nulla sollicitudin mi massa, ut tempor neque pharetra ut. Phasellus pharetra purus tortor,
      vitae tristique nunc accumsan sit amet. Pellentesque feugiat porttitor massa. Vestibulum at
      magna aliquet, ultricies justo at, fringilla dolor. Nullam eu bibendum nulla. Maecenas
      tristique rutrum luctus. Vestibulum in augue felis. Nullam pharetra, ante sit amet fermentum
      facilisis, sapien velit venenatis diam, a imperdiet odio enim ut enim. Sed in sem vitae risus
      euismod commodo sed ac mi. Sed mi lorem, placerat ac libero eu, hendrerit vulputate tellus.
      Suspendisse sit amet porttitor massa, eu interdum elit. Proin rutrum at diam quis vulputate.
      Morbi gravida ante magna, non molestie quam vehicula ut. Sed erat dui, maximus id nisl nec,
      volutpat condimentum turpis. Pellentesque vel elementum felis, eu porttitor risus. Nulla
      facilisi. Nullam porta nulla odio, eget dignissim leo aliquet at. Maecenas sodales sodales
      tortor, in sodales ante. Quisque sit amet arcu massa. Sed ullamcorper imperdiet eleifend.
      Quisque porta lorem non sapien accumsan, quis tincidunt augue facilisis. Praesent pellentesque
      arcu nec mauris ornare, eu rutrum quam semper. Mauris vulputate dapibus tellus, a feugiat
      tellus condimentum eget. Maecenas nisi lectus, tincidunt eu vehicula lacinia, iaculis a ex. Ut
      eget arcu sit amet mauris bibendum eleifend. Quisque volutpat sem ac varius facilisis. Quisque
      orci ipsum, aliquet a bibendum laoreet, laoreet a metus. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Pellentesque rhoncus sapien nec lorem auctor, eu bibendum ligula
      consequat. In auctor id felis quis feugiat. Donec at felis in libero vehicula suscipit.
      Praesent sollicitudin libero ligula, non hendrerit odio vulputate vehicula. Proin at eros sit
      amet turpis dapibus sodales ac sed nunc. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Phasellus auctor lobortis lectus a auctor. Suspendisse potenti. Maecenas convallis,
      erat vel aliquet cursus, nisi dui pretium lectus, ac iaculis massa ipsum sit amet orci. Proin
      aliquam faucibus ipsum eu rhoncus. Nulla non faucibus ex. Aenean odio leo, lacinia quis nunc
      vel, scelerisque egestas leo. Ut auctor dui eget tellus maximus dapibus. Suspendisse est
      turpis, cursus laoreet lectus at, tempor porta ex. Mauris lacinia tortor ut lacus fermentum,
      in dapibus sem ultrices. Donec interdum purus ac elit posuere ornare. Nulla sodales, sem et
      cursus malesuada, dolor dolor sodales lorem, non rhoncus justo lectus eu magna. Phasellus eget
      cursus purus, ut suscipit neque. Suspendisse mattis luctus dapibus. Nulla sollicitudin mi
      massa, ut tempor neque pharetra ut. Phasellus pharetra purus tortor, vitae tristique nunc
      accumsan sit amet. Pellentesque feugiat porttitor massa. Vestibulum at magna aliquet,
      ultricies justo at, fringilla dolor. Nullam eu bibendum nulla. Maecenas tristique rutrum
      luctus. Vestibulum in augue felis. Nullam pharetra, ante sit amet fermentum facilisis, sapien
      velit venenatis diam, a imperdiet odio enim ut enim. Sed in sem vitae risus euismod commodo
      sed ac mi. Sed mi lorem, placerat ac libero eu, hendrerit vulputate tellus. Suspendisse sit
      amet porttitor massa, eu interdum elit. Proin rutrum at diam quis vulputate. Morbi gravida
      ante magna, non molestie quam vehicula ut. Sed erat dui, maximus id nisl nec, volutpat
      condimentum turpis. Pellentesque vel elementum felis, eu porttitor risus. Nulla facilisi.
      Nullam porta nulla odio, eget dignissim leo aliquet at. Maecenas sodales sodales tortor, in
      sodales ante. Quisque sit amet arcu massa. Sed ullamcorper imperdiet eleifend. Quisque porta
      lorem non sapien accumsan, quis tincidunt augue facilisis. Praesent pellentesque arcu nec
      mauris ornare, eu rutrum quam semper. Mauris vulputate dapibus tellus, a feugiat tellus
      condimentum eget. Maecenas nisi lectus, tincidunt eu vehicula lacinia, iaculis a ex. Ut eget
      arcu sit amet mauris bibendum eleifend. Quisque volutpat sem ac varius facilisis. Quisque orci
      ipsum, aliquet a bibendum laoreet, laoreet a metus.
    </Content>
  </FlexContainer>
);

export default Home;
