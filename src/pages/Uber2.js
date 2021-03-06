import React, { Component } from 'react'

import { Author } from '../components'
import Page from './Page'
import styles from './styles'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

export default class Uber extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={{paddingRight: '30px'}}>
              <div style={styles.h3}>
                {this.props.title}
                <Author url={'https://twitter.com/devinaabbott'}>
                  @devinaabbott
                </Author>
              </div>
              <div style={styles.p}>
                Let's now add the search results list. We'll render the <code>LocationSearchResults</code> into <code>Main</code>. This should be an element which animates up from the bottom, stopping to meet the <code>LocationSearchHeader</code> in its expanded state.
              </div>
              <div style={styles.p}>
                Within <code>LocationSearchResults</code> we'll render the a <code>SearchResultsList</code>, which contains a list of <code>SearchResultsRow</code>. The list should use a react-native ListView.
              </div>
            </div>
            <div>
              <img src={'uber-step-results-list.png'} width={280} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
