import React from 'react';
import { Text, Modal, StyleSheet, ScrollView, View } from 'react-native';

import { PrimaryButton } from './PrimaryButton';

import { Color, FontSize, scale } from '../config/style';

interface TermOfUseProps {
  visible: boolean;
  showModal: (value: boolean) => void;
}

export function TermOfUse({ visible, showModal }: TermOfUseProps) {
  return (
    <Modal animationType={'slide'} visible={visible} transparent={true}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          Este aplicativo é mantido e operado por Infocus App - Ltda.
        </Text>
        <Text style={styles.text}>
          Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles
          que utilizam nosso aplicativo. Ao fazê-lo, agimos na qualidade de
          controlador desses dados e estamos sujeitos às disposições da Lei
          Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais -
          LGPD).
        </Text>
        <Text style={styles.text}>
          Nós cuidamos da proteção de seus dados pessoais e, por isso,
          disponibilizamos esta política de privacidade, que contém informações
          importantes sobre:
          {
            '\n- Quem deve utilizar nosso aplicativo; \n- Quais dados coletamos e o que fazemos com eles; \n- Seus direitos em relação aos seus dados pessoais; \n- Como entrar em contato conosco.'
          }
        </Text>
        <Text style={styles.subTitle}>
          1. Dados que coletamos e motivos da coleta
        </Text>
        <Text style={styles.text}>
          Nosso aplicativo coleta e utiliza alguns dados pessoais de nossos
          usuários, de acordo com o disposto nesta seção.
        </Text>
        <Text style={styles.text}>
          1. Dados pessoais fornecidos expressamente pelo usuário
        </Text>
        <Text style={styles.text}>
          Nós coletamos os seguintes dados pessoais que nossos usuários nos
          fornecem expressamente ao utilizar nosso aplicativo:
        </Text>
        <Text style={styles.italicText}>
          Nome completo; email para registro de conta; senha de usuário;
        </Text>
        <Text style={styles.text}>
          A coleta destes dados ocorre na criação da conta do aplicativo.
        </Text>
        <Text style={styles.text}>
          Os dados fornecidos por nossos usuários são coletados com a finalidade
          de efetuar login de usuário no aplicativo.
        </Text>
        <Text style={styles.text}>2. Dados sensíveis</Text>
        <Text style={styles.text}>
          <Text style={styles.strongText}>Não</Text> serão coletados dados
          sensíveis de nossos usuários, assim entendidos aqueles definidos nos
          arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim, não
          haverá coleta de dados sobre origem racial ou étnica, convicção
          religiosa, opinião política, filiação a sindicato ou a organização de
          caráter religioso, filosófico ou político, dado referente à saúde ou à
          vida sexual, dado genético ou biométrico, quando vinculado a uma
          pessoa natural.
        </Text>
        <Text style={styles.text}>
          3. Coleta de dados não previstos expressamente
        </Text>
        <Text style={styles.text}>
          Eventualmente, outros tipos de dados não previstos expressamente nesta
          Política de Privacidade poderão ser coletados, desde que sejam
          fornecidos com o consentimento do usuário, ou, ainda, que a coleta
          seja permitida com fundamento em outra base legal prevista em lei.
        </Text>
        <Text style={styles.text}>
          Em qualquer caso, a coleta de dados e as atividades de tratamento dela
          decorrentes serão informadas aos usuários do aplicativo.
        </Text>
        <Text style={styles.subTitle}>
          2. Compartilhamento de dados pessoais com terceiros
        </Text>
        <Text style={styles.text}>
          Nós não compartilhamos seus dados pessoais com terceiros. Apesar
          disso, é possível que o façamos para cumprir alguma determinação legal
          ou regulatória, ou, ainda, para cumprir alguma ordem expedida por
          autoridade pública.
        </Text>
        <Text style={styles.subTitle}>
          3. Por quanto tempo seus dados pessoais serão armazenados
        </Text>
        <Text style={styles.text}>
          Os dados pessoais que coletamos serão armazenados no período de
          criação da conta.
        </Text>
        <Text style={styles.text}>
          Os períodos informados não são superiores ao estritamente necessário,
          atendendo às finalidades e às justificativas legais para o tratamento
          dos dados.
        </Text>
        <Text style={styles.text}>
          Vale dizer que, se houver alguma justificativa legal ou regulatória,
          os dados poderão continuar armazenados ainda que a finalidade para a
          qual foram coletados ou tenham sido tratados tenha se exaurido.
        </Text>
        <Text style={styles.text}>
          Uma vez finalizado o tratamento, observadas as disposições desta
          seção, os dados são apagados ou anonimizados.
        </Text>
        <Text style={styles.subTitle}>
          4. Bases legais para o tratamento de dados pessoais
        </Text>
        <Text style={styles.text}>
          Cada operação de tratamento de dados pessoais precisa ter um
          fundamento jurídico, ou seja, uma base legal, que nada mais é que uma
          justificativa que a autorize, prevista na Lei Geral de Proteção de
          Dados Pessoais.
        </Text>
        <Text style={styles.text}>
          Todas as nossas atividades de tratamento de dados pessoais possuem uma
          base legal que as fundamenta, dentre as permitidas pela legislação.
          Mais informações sobre as bases legais que utilizamos para operações
          de tratamento de dados pessoais específicas podem ser obtidas a partir
          de nossos canais de contato, informados ao final desta Política.
        </Text>
        <Text style={styles.subTitle}>
          5. Medidas de segurança no tratamento de dados pessoais
        </Text>
        <Text style={styles.text}>
          Empregamos medidas técnicas e organizativas aptas a proteger os dados
          pessoais de acessos não autorizados e de situações de destruição,
          perda, extravio ou alteração desses dados.
        </Text>
        <Text style={styles.text}>
          As medidas que utilizamos levam em consideração a natureza dos dados,
          o contexto e a finalidade do tratamento, os riscos que uma eventual
          violação geraria para os direitos e liberdades do usuário, e os
          padrões atualmente empregados no mercado por empresas semelhantes à
          nossa.
        </Text>
        <Text style={styles.text}>
          Entre as medidas de segurança adotadas por nós, destacamos as
          seguintes:
        </Text>
        <Text style={styles.italicText}>
          Todos os dados do usuário são devidamente armazenados em nosso banco
          de dados sob criptografia.
        </Text>
        <Text style={styles.text}>
          Ainda que adote tudo o que está ao seu alcance para evitar incidentes
          de segurança, é possível que ocorra algum problema motivado
          exclusivamente por um terceiro - como em caso de ataques de hackers ou
          crackers ou, ainda, em caso de culpa exclusiva do usuário, que ocorre,
          por exemplo, quando ele mesmo transfere seus dados a terceiro. Assim,
          embora sejamos, em geral, responsáveis pelos dados pessoais que
          tratamos, nos eximimos de responsabilidade caso ocorra uma situação
          excepcional como essas, sobre as quais não temos nenhum tipo de
          controle.
        </Text>
        <Text style={styles.text}>
          De qualquer forma, caso ocorra qualquer tipo de incidente de segurança
          que possa gerar risco ou dano relevante para qualquer de nossos
          usuários, comunicaremos os afetados e a Autoridade Nacional de
          Proteção de Dados acerca do ocorrido, em conformidade com o disposto
          na Lei Geral de Proteção de Dados.
        </Text>
        <Text style={styles.subTitle}>6. Alterações nesta política</Text>
        <Text style={styles.text}>
          A presente versão desta Política de Privacidade foi atualizada pela
          última vez em: 08/05/2021.
        </Text>
        <Text style={styles.text}>
          Reservamo-nos o direito de modificar, a qualquer momento, as presentes
          normas, especialmente para adaptá-las às eventuais alterações feitas
          em nosso aplicativo, seja pela disponibilização de novas
          funcionalidades, seja pela supressão ou modificação daquelas já
          existentes.
        </Text>
        <Text style={styles.text}>
          Sempre que houver uma modificação, nossos usuários serão notificados
          acerca da mudança.
        </Text>
        <Text style={styles.subTitle}>7. Como entrar em contato conosco</Text>
        <Text style={styles.text}>
          Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade
          ou sobre os dados pessoais que tratamos, entre em contato conosco
          através do e-mail{' '}
          <Text style={styles.strongText}>contato@infocusapp.com.br</Text>.
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton text={'Voltar'} onPress={() => showModal(false)} />
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: scale(20),
    marginBottom: scale(30),
  },
  strongText: {
    fontWeight: 'bold',
  },
  italicText: {
    color: Color.primaryColor,
    fontStyle: 'italic',
    marginBottom: scale(5),
  },
  subTitle: {
    color: Color.primaryColor,
    fontSize: FontSize.small,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: Color.contrastColor,
    alignSelf: 'center',
    maxHeight: '98%',
    width: '95%',
    borderRadius: scale(15),
    opacity: 0.98,
    padding: scale(15),
  },
  title: {
    color: Color.primaryColor,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: Color.primaryColor,
    textAlign: 'justify',
    marginBottom: scale(5),
  },
});
